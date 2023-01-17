<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { page } from '$app/stores';

  const menu = [
    { name: 'campaigns', href: '/campaigns' },
    { name: 'chapters', href: '/chapters' },
    { name: 'locations', href: '/locations' },
    { name: 'players', href: '/players' },
  ];

  $: currentPage = $page.url.pathname;
</script>

<div id="top-bar">
  <div id="top-bar-left">
    {#each menu as {href, name}}
      <a class:active={href === currentPage}
        href={href}>{name}</a>
    {/each}
  </div>
  <div id="top-bar-right">
    <button class="dice-ico" />
    <button class="gear-ico" />
  </div>
</div>

<style>
  :root {
    --font: 'Nunito', sans-serif;
    --primary-text: #161717;
    --background: #e5e9e8;
    --primary: #679786;
    --secondary: #c59b9f;
    --edit: #aeafa0;
  }

  :global(body) {
    margin: 0;
  }

  #top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--color-white);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.3);
  }

  #top-bar-left {
    display: flex;
    align-items: center;
    column-gap: 35px;
  }

  #top-bar-right {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 35px;
  }

  #top-bar-left a {
    font-family: var(--font);
    font-weight: light;
    text-transform: uppercase;
    font-size: 24px;
    color: var(--primary-text);
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }

  #top-bar-left a:hover {
    text-shadow: 0 0 6px var(--primary);
  }

  #top-bar-left .active {
    text-shadow: 0 0 6px rgb(108, 109, 100);
  }

  .dice-ico {
    width: 30px;
    height: 32px;
    background-image: url('../assets/dice-ico.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: 0.2s ease-in-out;
  }

  .dice-ico:hover {
    transform: scale(1.1);
    animation: spin 1s linear infinite;
  }

  .gear-ico {
    width: 34px;
    height: 34px;
    background-image: url('../assets/gear.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: 0.2s ease-in-out;
  }

  .gear-ico:hover {
    transform: scale(1.1);
    animation: spin 1s linear infinite;
  }

  /* Animations */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
