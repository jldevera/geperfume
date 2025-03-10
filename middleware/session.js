export default defineNuxtRouteMiddleware((to, from) => {
  const sessionId = useCookie('session_id');

  if (!sessionId.value) {
    return navigateTo('/login');
  }
});
