<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="bg-white min-w-[300px] sp:w-full sp:min-h-screen 
        sp:flex sp:items-center sp:justify-center
        w-[30%] rounded rounded-md
        drop-shadow-lg"
      >
        <div class="card__body sp:w-[80%]">
          <div class="card__content">
            <h1 class="card__title">Login</h1>
            <form @submit.prevent="handleLogin">
              <div class="form form__wrapper">
                <label for="username" class="form form__label">Username</label>
                <input class="form form__input" type="text" v-model="username" id="username" />
              </div>
              <div>
                <label for="password" class="form form__label">Password</label>
                <input class="form form__input" type="password" v-model="password" id="password" />
              </div>
              <p v-if="errorMessage" class="form form__error">{{ errorMessage }}</p>
              <button class="btn btn-blue mt-5 w-full" type="submit">Login</button>
            </form>
            <div class="flex items-center justify-center mt-5">
              <a class="link" href="/">Go to Main Page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useCookie } from '#app';

  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();

  // Check if session exists, if so, redirect to admin page
  const sessionId = useCookie('session_id');
  if (sessionId.value) {
    router.push('/admin');
  }
  
  /**
   * Handle the login process an store session data
   */
  const handleLogin = async () => {
    // Replace this with actual login logic (e.g., API call)
    if (username.value === 'admin' && password.value === 'password') {
      // Store session ID in a cookie
      const sessionId = generateSecureRandomString();
      useCookie('session_id').value = sessionId;
  
      // Redirect to admin page
      router.push('/admin');
    } else if (username.value === '' || password.value === '') {
      errorMessage.value = 'Username and Password are required';
    } else {
      errorMessage.value = 'Invalid username or password';
    }
  };

  /**
   * Generate random string
   *
   * @param length 
   */
  function generateSecureRandomString(length = 10) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return array.reduce((str, byte) => str + (byte % 36).toString(36), '');
  }
</script>
  