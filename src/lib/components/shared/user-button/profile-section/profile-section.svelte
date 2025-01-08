<script lang="ts">
	import { firekitDoc, firekitUser } from 'svelte-firekit';

	import AvatarUser from './avatar-user.svelte';
	import ConnectUser from './connect-user.svelte';
	import EmailUser from './email-user.svelte';
	import PhoneUser from './phone-user.svelte';
	import { onMount } from 'svelte';

	let userdata = $state(firekitDoc(`users/${firekitUser.uid}`));

</script>

<h2 class=" pb-3 text-lg font-semibold">Profile Details</h2>

{#if userdata.data}
	<AvatarUser user={userdata.data}></AvatarUser>
	{#if firekitUser.user?.providerData[0]?.providerId !== 'google.com'}
		<EmailUser user={userdata.data}></EmailUser>
	{/if}
	<PhoneUser user={userdata.data}></PhoneUser>
	<ConnectUser ></ConnectUser>
{/if}
