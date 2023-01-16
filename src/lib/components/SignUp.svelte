<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import logo from '$lib/assets/splash-logo.svg';

  let loading = false;
  let email: string = '';
  let password: string = '';

  async function signUpWithEmail() {
    // @ts-ignore
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    window.location.href = '/';
  }

  function handleGoBack() {
    // @ts-ignore
    window.history.back();
  }
</script>

<div id="signup">
  <form
    id="signup__form"
    on:submit|preventDefault={signUpWithEmail}
  >
    <div class="signup__logo">
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
      <input
        class="inputField"
        type="password"
        placeholder="Password"
        bind:value={password}
      />
    </div>
    <div class="signup__btns">
      <input
        class="secondary-btn"
        value={loading ? 'Loading' : 'Go Back'}
        disabled={loading}
        on:click={(e) => {
          // go back to login page
          e.preventDefault();
          handleGoBack();
        }}
        on:keypress={(e) => {
          // go back to login page
          e.preventDefault();
          handleGoBack();
        }}
      />
      <input
        on:keypress={(e) => {
          if (e.key === 'Enter') {
            signUpWithEmail();
          }
        }}
        type="submit"
        class="primary-btn"
        value={loading ? 'Loading' : 'Sign Up'}
        disabled={loading}
      />
    </div>
  </form>
  <div class="text-center">
    <span class="signup__back-to"
      >Already have an account? <a
        class="primary-link"
        href="/">Sign in.</a
      ></span
    >
  </div>
</div>

<style>
  :global(body) {
    overflow: hidden;
    max-width: 100%;
  }

  #signup .primary-btn {
    background: rgb(103, 151, 134, 1);
    color: #e5e9e8;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 0 6px rgba(22, 23, 23, 0.2);
    text-transform: uppercase;
    width: 45%;
    cursor: pointer;
  }
  #signup .primary-btn:active {
    background: rgb(103, 151, 134, 0.8);
    color: #e5e9e8;
    font-size: 14px;
    font-weight: 700;
    box-shadow: none;
  }

  #signup .secondary-btn {
    background: rgba(197, 155, 159, 1);
    color: #e5e9e8;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 0 6px rgba(22, 23, 23, 0.2);
    text-transform: uppercase;
    width: 40%;
    cursor: pointer;
  }
  #signup .secondary-btn:active {
    background: rgba(197, 155, 159, 0.8);
    color: #e5e9e8;
    font-size: 14px;
    font-weight: 700;
    box-shadow: none;
  }

  #signup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
  }

  .signup__logo {
    margin-bottom: 1rem;
    width: 300px;
  }

  #logo {
    width: 250px;
  }

  #signup__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    max-width: 400px;
  }

  #signup__form > div:not(:last-child) {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #signup__form > div > input {
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

  #signup__form > div > input:focus {
    outline: none;
    box-shadow: inset 0 0 6px rgba(22, 23, 23, 0.3),
      0 0 6px #d1d5d4;
  }

  #signup__form > div > input[type='text'] {
    margin-bottom: 1rem;
  }

  .signup__btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    column-gap: 10px;
  }

  .text-center {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin-top: 1rem;
  }

  .signup__back-to {
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
    color: rgba(22, 23, 23, 0.8);
  }

  .primary-link {
    color: rgb(103, 151, 134, 1);
    text-decoration: none;
    transition: color 0.4s ease-in-out;
    font-weight: bold;
    grid-column: 1 / 2;
  }

  .primary-link:hover {
    color: rgb(103, 151, 134, 0.8);
    text-shadow: 0 0 6px rgb(103, 151, 134, 0.1);
    transition: color 0.4 ease-in-out;
  }

  .secondary-link {
    color: rgba(197, 155, 159, 0.8);
    text-decoration: none;
    transition: color 0.4s ease-in-out;
    font-weight: bold;
    grid-column: 2 / 3;
  }

  .secondary-link:hover {
    color: rgba(197, 155, 159, 0.1);
    transition: color 0.4 ease-in-out;
  }
</style>
