<script>
  import { page } from '$app/stores';
  import Account from './Account.svelte';
  import Auth from '$lib/components/Auth.svelte';
</script>

<!--
    Splash screen will show for
    2 seconds before loading Auth
-->
{#if !$page.data.session}
  <Auth />
{:else}
  <Account session={$page.data.session} />
{/if}
