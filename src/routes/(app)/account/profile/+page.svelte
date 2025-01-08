<script>
	import { Avatar, CoverPhoto, PersonalInfo } from '$lib/components/app/account/profile/';
	import { firekitDoc, firekitUser } from 'svelte-firekit';
	import EmailUser from '$lib/components/auth/user-button/profile-section/email-user.svelte';
	import PasswordChange from '$lib/components/app/account/profile/password-change.svelte';
	import TwoStepVerification from '$lib/components/app/account/profile/two-step-verification.svelte';
	import DisableAds from '$lib/components/app/account/profile/disable-ads.svelte';
	import DeleteAccount from '$lib/components/app/account/profile/delete-account.svelte';
	import Sessions from '$lib/components/app/account/profile/sessions.svelte';

	let userdata = $state(firekitDoc(`users/${firekitUser.uid}`));
</script>

{#if userdata.data}
	<Avatar user={userdata.data} />
	<CoverPhoto user={userdata.data} />
	<TwoStepVerification></TwoStepVerification>
	<DisableAds disableAds={userdata.data.disableAds}></DisableAds>
	<Sessions></Sessions>
	{#if firekitUser.user?.providerData[0]?.providerId !== 'google.com'}
		<EmailUser user={userdata.data}></EmailUser>
        <PasswordChange></PasswordChange>
	{/if}
	<PersonalInfo user={userdata.data} />
	<DeleteAccount></DeleteAccount>
{/if}
