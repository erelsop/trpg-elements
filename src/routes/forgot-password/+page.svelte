<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import logo from '$lib/assets/splash-logo.svg';

  let loading = false;
  let email: string = '';
  let password: string = '';

  let info: HTMLSpanElement | null;
  onMount(() => {
    info = document.querySelector('.info');
  });

  async function resetPassword() {
    const { data, error } =
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo:
          'http://trpg-elements.com/forgot-password/reset',
      });
    if (error) {
      info!.textContent = error.message;
    } else {
      info!.textContent = 'Check your email for the link!';
      setTimeout(() => {
        window.history.back();
      }, 3000);
    }
  }

  function handleGoBack() {
    // @ts-ignore
    window.history.back();
  }
</script>

<div id="reset">
  <form
    id="reset__form"
    on:submit|preventDefault={resetPassword}
  >
    <div class="reset__logo">
      <img
        src={logo}
        alt="tRPG Elements logo"
        id="logo"
      />
    </div>
    <div>
      <input
        class="inputField"
        type="text"
        placeholder="Email"
        bind:value={email}
      />
    </div>
    <div class="reset__btns">
      <input
        class="secondary-btn"
        value={loading ? 'Loading' : 'Go Back'}
        disabled={loading}
        on:click={(e) => {
          // go back to reset page
          console.log('click');
          handleGoBack();
        }}
        on:keypress={(e) => {
          // go back to reset page
          console.log('keypress');
          handleGoBack();
        }}
      />
      <input
        on:click={(e) => {
          // go back to reset page
          console.log('click');
          resetPassword();
        }}
        type="submit"
        class="primary-btn"
        value={loading ? 'Loading' : 'Send Reset Link'}
        disabled={loading}
      />
    </div>
    <span class="info" />
  </form>
</div>

<style>
  :global(body) {
    overflow: hidden;
    max-width: 100%;
  }

  #reset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
  }

  .reset__logo {
    margin-bottom: 1rem;
    width: 300px;
  }

  #logo {
    width: 250px;
  }

  #reset__form > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #reset__form > div > input {
    width: 200px;
    padding: 0.5rem;
    border: none;
    border-radius: 6px;
    text-align: center;
    background-color: #e5e9e8;
    box-shadow: inset 0 0 6px rgba(22, 23, 23, 0.3);
  }

  input:-moz-placeholder,
  input::-moz-placeholder,
  input:-ms-input-placeholder,
  input::-webkit-input-placeholder,
  input::placeholder {
    color: rgb(22, 23, 23);
  }

  #reset__form > div > input:focus {
    outline: none;
    box-shadow: inset 0 0 6px rgba(22, 23, 23, 0.3),
      0 0 6px #d1d5d4;
  }

  #reset__form > div > input[type='text'] {
    margin-bottom: 1rem;
  }

  .reset__btns {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center;
    align-items: center;
    width: 300px;
    column-gap: 10px;
  }

  #reset .primary-btn {
    background: rgb(103, 151, 134, 1);
    color: #e5e9e8;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 0 6px rgba(22, 23, 23, 0.2);
    text-transform: uppercase;
    width: 45%;
    cursor: pointer;
  }
  #reset .primary-btn:active {
    background: rgb(103, 151, 134, 0.8);
    color: #e5e9e8;
    font-size: 14px;
    font-weight: 700;
    box-shadow: none;
  }

  #reset .secondary-btn {
    background: rgba(197, 155, 159, 1);
    color: #e5e9e8;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 0 6px rgba(22, 23, 23, 0.2);
    text-transform: uppercase;
    width: 30%;
    cursor: pointer;
  }
  #reset .secondary-btn:active {
    background: rgba(197, 155, 159, 0.8);
    color: #e5e9e8;
    font-size: 14px;
    font-weight: 700;
    box-shadow: none;
  }

  .info {
    text-align: center;
  }

  .error,
  .success {
    margin-top: 1rem;
    font-size: 14px;
    font-weight: 700;
  }

  .error {
    color: rgba(197, 155, 159, 1);
  }

  .success {
    color: rgb(103, 151, 134, 1);
  }
</style>
