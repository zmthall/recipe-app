<template>
  <header class="flex justify-between p-4 shadow-md bg-brand-primary/20 backdrop-blur-md sticky top-0 left-0 z-10">
    <NuxtLink :to="logoLink">
      <NuxtImg
        format="webp"
        width="100px"
        src="/images/logo.png"
        alt="Menu Mate Logo"
      />
    </NuxtLink>
    <div class="flex items-center gap-6" v-show="links">
      <nav class="flex items-center">
        <ul class="flex gap-6">
          <template v-for="link in links" :key="link.name">
            <li v-if="link.visible" class="text-brand-link hover:text-brand-secondary font-extrabold">
              <NuxtLink :to="link.url">{{link.name}}</NuxtLink>
            </li>
          </template>
        </ul>
      </nav>
      <NuxtLink to="/login" v-if="!authStore.authenticated" class="px-6 py-2 border-2 border-brand-primary rounded-lg hover:bg-brand-secondary hover:text-brand-white transition-colors duration-300 ease-in-out">Login</NuxtLink>
      <button v-else class="px-6 py-2 border-2 border-brand-primary rounded-lg hover:bg-brand-secondary hover:text-brand-white transition-colors duration-300 ease-in-out" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { Links } from '../../models/types/header.js';

const authStore = useAuthStore();
const firebaseAuth = useFirebaseAuth();

const links = ref<Links[] | undefined>(undefined)

const logoLink = computed(() => {
  if (authStore.authenticated) return { path: "/dashboard" };
  else return { path: "/" };
});

onMounted(async () => {
  await until(() => authStore.authResolved).toBe(true);
  links.value = [
  {name: 'Home', url: logoLink.value, visible: true},
  {name: 'Contact', url: {path: '/contact'}, visible: !authStore.authenticated},
  {name: 'About Us', url: {path: '/about'}, visible: !authStore.authenticated},
  {name: 'Meal Planner', url: {path:'/meal-planner'}, visible: authStore.authenticated },
  {name: 'Grocery List', url: {path:'/grocery-list'}, visible: authStore.authenticated },
  {name: 'Cook Books', url: {path:'/cook-books'}, visible: authStore.authenticated },
  {name: 'Recipes', url: {path:'/recipes'}, visible: authStore.authenticated }
]
})

const logout = () => {
  firebaseAuth.logoutUser()
  navigateTo({path: '/login'})
}

</script>

<style></style>
