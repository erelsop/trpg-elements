<script context="module">
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
  import '../app.css';

  export let url;

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

<main class="container">
  <PageTransition {url}>
    <slot />
  </PageTransition>
</main>
