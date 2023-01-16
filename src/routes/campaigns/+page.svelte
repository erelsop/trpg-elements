<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';

  onMount(async () => {
    const { error } = await supabase.auth.getUser();
    if (error) {
      window.location.href = '/';
    }
  });
</script>

<h1>Logged in! :)</h1>
