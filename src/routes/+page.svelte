<script>
  import { page } from '$app/stores';
  import Auth from '$lib/components/Auth.svelte';
</script>

<div class="auth-container">
  {#if !$page.data.session}
    <Auth />
  {/if}
</div>

<style>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: hidden;
  }
</style>