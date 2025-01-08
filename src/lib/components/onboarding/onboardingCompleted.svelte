<script lang="ts">
	import { goto } from '$app/navigation';
	import { userStore } from '$lib/stores/sessions';
	import { firekitDoc, firekitUser } from 'svelte-firekit';

	let userData = $state(firekitDoc(`users/${firekitUser.uid}`));

	$effect(() => {
		if (firekitUser.initialized && firekitUser.isLoggedIn && userData.data) {
            userStore.set(userData.data)
			validateOnBoarding(userData.data);
		}
	});

	function validateOnBoarding(userInfo: any) {
		const requiredFields = [
			'displayName',
			'timeZone',
			'location',
			'phoneNumber',
			'language',
			'onboardingCompleted'
		];
		const missingFields = requiredFields.filter((field) => {
			if (field === 'onboardingCompleted') {
				return !(field in userInfo) || !userInfo[field];
			}
			return !(field in userInfo) || userInfo[field] === '';
		});

		console.log("onboarding data: ",missingFields.length);
		if (missingFields.length === 0) goto('/dashboard');
	}
</script>

<div></div>
