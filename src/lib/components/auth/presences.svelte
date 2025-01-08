<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { ref, onDisconnect, onValue, get, set } from 'firebase/database';
	import { firebaseService, firekitUser } from 'svelte-firekit';
	import { UAParser } from 'ua-parser-js';
	import { currentSession, sessionsStore } from '$lib/stores/sessions';

	let connectedListener;

	onMount(() => {
		const user = firekitUser?.user;
		if (user) {
			updateOnUser();
			updateOnAway();
		}
	});

	function clearListeners() {
		if (connectedListener) connectedListener();
	}

	function getDeviceInfo() {
		const parser = new UAParser();
		const { browser, os } = parser.getResult();
		return `${browser.name} - ${os.name}`
	}

	async function fetchIPAndLocation() {
		try {
			const ipResponse = await fetch('https://api.ipify.org?format=json');
			const { ip } = await ipResponse.json();

			const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
			const locationData = await locationResponse.json();

			return {
				ip,
				location: `${locationData.city || 'Unknown'}, ${locationData.region || 'Unknown'}`
			};
		} catch (err) {
			console.error('Error fetching IP or location:', err);
			return { ip: 'Unknown', location: 'Unknown' };
		}
	}

	async function setPresence(status: string) {
		const user = firekitUser?.user;
		if (!user) return;
		
		const db = firebaseService.getDatabaseInstance();
		const userSessionsRef = ref(db, `sessions/${user.uid}`);
		const browser = getDeviceInfo();
		let sessionId = `${user.uid}_${browser.replace(/[ /]/g, '')}`;

		const userSessionsSnap = await get(userSessionsRef);
		let sessionDatas = [];

		if (userSessionsSnap.exists()) {
			sessionDatas = userSessionsSnap.val().sessionDatas || [];

			const sessionIndex = sessionDatas.findIndex((session) => session.uid === sessionId);
			const currentsession = sessionDatas.find((session) => session.uid === sessionId);
			currentSession.set(currentsession)

			if (sessionIndex !== -1) {
				sessionDatas[sessionIndex].status = status;
				sessionDatas[sessionIndex].last_changed = new Date().toISOString();
			} else {
				const { ip, location } = await fetchIPAndLocation();

				sessionDatas.push({
					uid: sessionId,
					userId: user.uid,
					browser,
					ip,
					location,
					status,
					createdAt: new Date().toISOString(),
					last_changed: new Date().toISOString()
				});
			}
		} else {
				const { ip, location } = await fetchIPAndLocation();

			sessionDatas = [
				{
					uid: sessionId,
					userId: user.uid,
					browser,
					ip,
					location,
					status,
					createdAt: new Date().toISOString(),
					last_changed: new Date().toISOString()
				}
			];
		}

		await set(userSessionsRef, { sessionDatas });
		sessionsStore.set(sessionDatas)
	}

	function updateOnUser() {
		const user = firekitUser?.user;
		if (user) {
			const connectedRef = ref(firebaseService.getDatabaseInstance(), `.info/connected`);

			connectedListener = onValue(connectedRef, async (snapshot) => {
				if (snapshot.val() === true) {
					await setPresence('online');
					const userStatusRef = ref(firebaseService.getDatabaseInstance(), `sessions/${user.uid}`);
					onDisconnect(userStatusRef).update({
						status: 'offline',
						last_changed: new Date().toISOString()
					});
				} else {
					await setPresence('offline');
				}
			});
		}
	}

	function updateOnAway() {
		document.onvisibilitychange = async () => {
			if (document.visibilityState === 'hidden') {
				await setPresence('away');
			} else {
				await setPresence('online');
			}
		};
	}

	onDestroy(() => {
		clearListeners();
	});
</script>
