export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!import.meta.client) return;

  const authStore = useAuthStore()

  await until(() => authStore.authResolved).toBe(true);

  if(!authStore.authenticated)
    return navigateTo({path: '/login'})
})
