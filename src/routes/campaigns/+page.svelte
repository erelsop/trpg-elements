<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { User } from '../../models/user-model/User';
  import { Campaign } from '../../models/campaign-model/Campaign';

  let user: User;
  let id: string;
  let campaigns: any;

  onMount(async () => {
    const { error } = await supabase.auth.getUser();
    if (error) {
      window.location.href = '/';
    }
    user = new User();
    id = await user.id;
    campaigns = await user.campaigns;
    console.log(id);
    console.log(campaigns);
  });
</script>

<div id="campaign-container">
  <div id="campaign-header">
    <a
      href="/campaigns/new"
      class="primary-btn">+ element</a
    >
  </div>
</div>

<style>
  #campaign-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  #campaign-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 2rem;
  }
</style>
