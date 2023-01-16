<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import logo from '$lib/assets/splash-logo.svg';

  let loading = false;
  let email: string = '';
  let password: string = '';

  let inputFields: any;
  let errorSpan: HTMLSpanElement | null;

  async function signInWithPassword() {
    const { data, error } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
    if (error) {
      errorSpan!.textContent =
        'Having trouble? Click forgot password to update your password.';
    } else {
      window.location.href = '/campaigns';
    }
  }

  onMount(() => {
    errorSpan = document.querySelector(
      '.error-message__text'
    );
    inputFields = document.querySelectorAll('.inputField');
    inputFields.forEach((inputField: HTMLInputElement) => {
      inputField.addEventListener(
        'keyup',
        (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            signInWithPassword();
          }
        }
      );
    });
  });
</script>

<div id="login">
  <form
    id="login__form"
    on:submit|preventDefault={signInWithPassword}
  >
    <div class="login__logo">
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
        placeholder="Username"
        bind:value={email}
      />
      <input
        class="inputField"
        type="password"
        placeholder="Password"
        bind:value={password}
      />
    </div>
  </form>
  <div class="text-center">
    <a
      href="/signup"
      class="primary-link">Sign up</a
    >
    <a
      href="/forgot-password"
      class="secondary-link">Forgot password?</a
    >
  </div>
  <div class="error-message">
    <span class="error-message__text" />
  </div>
</div>

<style>
  :global(body) {
    overflow: hidden;
    max-width: 100%;
  }

  #login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
  }

  .login__logo {
    margin-bottom: 1rem;
    width: 300px;
  }

  #logo {
    width: 250px;
  }

  #login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    max-width: 400px;
  }

  #login__form > div {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #login__form > div > input {
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

  #login__form > div > input:focus {
    outline: none;
    box-shadow: inset 0 0 6px rgba(22, 23, 23, 0.3),
      0 0 6px #d1d5d4;
  }

  #login__form > div > input[type='text'] {
    margin-bottom: 1rem;
  }

  .text-center {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-top: -0.5rem;
  }

  .primary-link,
  .secondary-link {
    font-size: 0.8rem;
  }

  .primary-link {
    color: rgb(103, 151, 134, 1);
    text-decoration: none;
    transition: color 0.4s ease-in-out;
    font-weight: bold;
  }

  .primary-link:hover {
    color: rgb(103, 151, 134, 0.8);
    text-shadow: 0 0 6px rgb(103, 151, 134, 0.1);
    transition: color 0.4 ease-in-out;
  }

  .secondary-link {
    color: rgba(197, 155, 159, 1);
    text-decoration: none;
    transition: color 0.4s ease-in-out;
    font-weight: bold;
  }

  .secondary-link:hover {
    color: rgba(197, 155, 159, 0.8);
    text-shadow: 0 0 6px rgb(103, 151, 134, 0.1);
    transition: color 0.4 ease-in-out;
  }

  .error-message {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 260px;
    margin-top: 1rem;
  }

  .error-message__text {
    color: rgba(197, 155, 159, 1);
    font-size: 0.8rem;
    font-weight: bolder;
    text-shadow: 0 0 6px rgb(103, 151, 134, 0.1);
    text-align: center;
  }
</style>
