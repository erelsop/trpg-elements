<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { User } from '../../models/user-model/User';
  import { Campaign } from '../../models/campaign-model/Campaign';

  let user: User;
  let id: string;
  let campaigns: any = [];

  onMount(async () => {
    const { error } = await supabase.auth.getUser();
    if (error) {
      window.location.href = '/';
    }
    user = new User();
    id = await user.id;
    campaigns = await user.campaigns;
    campaigns = campaigns.map((campaign: any) => {
      return [campaign.id, campaign.data];
    });
  });
</script>

<div id="campaign-container">
  <div
    id="campaign-list"
    class={campaigns[0] ? '' : 'fill-screen'}
  >
    <div
      id="create-campaign-card"
      class={campaigns[0] ? '' : 'fill-screen'}
    >
      <div class="create-campaign">
        <a
          href="/campaigns/new"
          class="primary-btn">+ campaign</a
        >
      </div>
    </div>
    {#each campaigns as campaign, i}
      <div class="campaign-card">
        <div class="campaign-card__header flex-col">
          <h2>{campaign[1][0].name}</h2>
          <h3>Chapter: {campaign[1][0].currentChapter}</h3>
        </div>
        <div class="campaign-card__description">
          <!-- <p>{campaign[1][0].description}</p> -->
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aliquam, pariatur repellendus.
            Nemo, veritatis est at velit praesentium
            repellendus! Omnis assumenda facere autem
            laborum excepturi dolor esse impedit reiciendis
            iure incidunt. Omnis assumenda facere autem
            laborum excepturi dolor esse impedit reiciendis
            iure incidunt. Omnis assumenda facere autem
            laborum excepturi dolor esse impedit reiciendis
            iure incidunt.Omnis assumenda facere autem
            laborum excepturi dolor esse impedit reiciendis
            iure incidunt.Omnis assumenda facere autem
            laborum excepturi dolor esse impedit reiciendis
            iure incidunt.Omnis assumenda facere autem
            laborum excepturi dolor esse impedit reiciendis
            iure incidunt.Omnis assumenda facere autem
            laborum excepturi dolor esse impedit reiciendis
            iure incidunt.
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .flex-col {
    display: flex;
    flex-direction: column;
    line-height: 12px;
  }

  .fill-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 0 !important;
  }

  #campaign-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 98%;
    margin: 0 auto;
  }

  #campaign-list {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(461px, 1fr)
    );
    gap: 60px;
    justify-items: center;
    align-items: center;
    width: 100%;
  }

  #create-campaign-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .campaign-card {
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: repeat(3, 1fr);
    max-width: 461px;
    max-height: 277px;
    border-radius: 6px;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
  }

  .create-campaign {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.5rem;
  }

  .campaign-card__header {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 1rem;
  }

  .campaign-card__description {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .campaign-card__description p {
    font-weight: 700;
    font-size: 14px;
    padding-left: 1rem;
    overflow-y: scroll;
    box-sizing: content-box;
    scrollbar-width: 0 !important;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    overscroll-behavior: none;
  }

  p::-webkit-scrollbar {
    display: none !important;
  }

  .campaign-card h3 {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #161717;
    font-size: 24px;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 8%));
  }
</style>
