<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { Campaign } from '$lib/../models/campaign-model/Campaign';

  onMount(async () => {
    const { error } = await supabase.auth.getUser();
    if (error) {
      window.location.href = '/';
    }
    const campaign = new Campaign();
    campaign.initCampaign();
  });
</script>
