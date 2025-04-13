<template>
  <header class="flex justify-between items-center p-4 shadow-md bg-brand-primary/20 backdrop-blur-md sticky top-0 left-0 z-10">
    <div :class="['sm:hidden fixed top-0 left-0 bg-black/90 backdrop-blur-md w-full h-dvh', {'hidden': !navOpen}]" @click="closeNav"></div>
    <NuxtLink :to="logoLink">
      <NuxtImg
        format="webp"
        width="100px"
        src="/images/logo.png"
        alt="Menu Mate Logo"
      />
    </NuxtLink>
    <div class="sm:hidden">
      <button @click="openNav">
        <Icon name="icon-park-outline:hamburger-button" class="size-8"/>
      </button>
    </div>
    <div :class="['max-sm:fixed max-sm:transition-transform max-sm:duration-500 max-sm:ease-in-out max-sm:top-0 max-sm:right-0 max-sm:h-dvh max-sm:w-[400px] sm:w-max max-xs:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:bg-brand-background-primary max-sm:shadow-main', {'max-sm:translate-x-[100%]': !navOpen, 'max-sm:translate-x-0': navOpen}]">
      <button @click="closeNav"
      class="sm:hidden max-sm:top-4 max-sm:right-4 max-sm:px-2 max-sm:absolute max-sm:text-3xl max-sm:hover:text-gray-500"><Icon name="material-symbols:close-rounded" class="size-10"/></button>
    <NuxtLink :to="logoLink" class="sm:hidden max-sm:my-20" @click="closeNav">
      <NuxtImg
        format="webp"
        width="200px"
        src="/images/logo.png"
        alt="Menu Mate Logo"
      />
    </NuxtLink>
      <div class="flex items-center gap-6 max-sm:w-3/4 max-sm:justify-center max-sm:border-y-2 max-sm:border-brand-border/50 py-8" v-show="links">
        <nav class="flex items-center max-sm:w-full">
          <ul class="flex gap-6 max-sm:flex-col max-sm:w-full">
            <template v-for="link in links" :key="link.name">
              <li v-if="link.visible" class="text-brand-link hover:text-brand-secondary font-extrabold max-sm:text-center">
                <NuxtLink :to="link.url" @click="closeNav">{{link.name}}</NuxtLink>
              </li>
            </template>
            <li :class="['text-brand-link hover:text-brand-secondary font-extrabold max-sm:text-center sm:hidden', {'hidden': authStore.authenticated}]">
              <NuxtLink :to="{path: '/login'}" @click="closeNav">Login</NuxtLink>
            </li>
            <li :class="['text-brand-link hover:text-brand-secondary font-extrabold max-sm:text-center sm:hidden', {'hidden': authStore.authenticated}]">
              <NuxtLink :to="{path: '/register'}" @click="closeNav">Register</NuxtLink>
            </li>
            <li :class="['text-brand-link hover:text-brand-secondary font-extrabold max-sm:text-center border-t-2 border-brand-border/25 w-full pt-8 sm:hidden', {'hidden': !authStore.authenticated}]">
              <button @click="logout">Logout</button>
            </li>
          </ul>
        </nav>
        <NuxtLink to="/login" v-if="!authStore.authenticated" class="px-6 py-2 border-2 max-sm:hidden border-brand-primary rounded-lg hover:bg-brand-secondary hover:text-brand-white transition-colors duration-300 ease-in-out">Login</NuxtLink>
        <button v-else class="px-6 py-2 border-2 border-brand-primary rounded-lg hover:bg-brand-secondary hover:text-brand-white transition-colors duration-300 ease-in-out max-sm:hidden" @click="logout">Logout</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { Links } from '../../models/types/header.js';

const authStore = useAuthStore();
const firebaseAuth = useFirebaseAuth();

const navOpen = ref<boolean>(false);

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

const openNav = () => {
  navOpen.value = true;
  document.body.classList.add('nav-open')
}

const closeNav = () => {
  navOpen.value = false;
  document.body.classList.remove('nav-open');
}
</script>

<style></style>
