<script context="module">
  import TopBar from '$lib/components/TopBar.svelte';
  // @ts-nocheck
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({
    props: { url: url.href },
  });
</script>

<script>
  import { supabase } from '$lib/supabaseClient';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  /** @type {import('./$types').LayoutData} */
  export let data;

  import '../app.css';

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth');
    });
    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<TopBar />
<main class="layout">
  <PageTransition pathname={data.pathname}>
    <slot />
  </PageTransition>
</main>

<style>
  .layout {
    min-height: 100vh;
    padding: 8rem 0 0 0;
  }
</style>
