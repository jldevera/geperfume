<template>
    <div class="flex justify-between p-3 items-center">
      <p>Welcome Admin!</p>

      <span class="menu-item" @click="logout">Logout</span>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useCookie } from '#app';

definePageMeta({
  middleware: 'session',
});

const router = useRouter();

const logout = () => {
  const sessionData = useCookie('session_id');
  sessionData.value = null;

  router.push('/login');
};
</script>