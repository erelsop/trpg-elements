<script>
  import { page } from '$app/stores';
  import Account from './Account.svelte';
  import Auth from '$lib/components/Auth.svelte';
</script>

{#if !$page.data.session}
  <Auth />
{:else}
  <Account session={$page.data.session} />
{/if}
