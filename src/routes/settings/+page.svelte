<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error)
      console.log('Error logging out:', error.message);
  };
</script>

<button
  on:click={() =>
    handleLogout().then(() => {
      goto('/')
    })}>Log out</button
>