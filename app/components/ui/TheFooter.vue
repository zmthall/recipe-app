<template>
  <footer
    class="bg-brand-primary/20 backdrop-blur-md pt-12 pb-8 text-brand-text-medium"
  >
    <div
      class="max-w-7xl mx-auto px-10 flex flex-col items-center text-center space-y-12"
    >
      <!-- Logo -->
      <NuxtLink :to="logoLink">
        <NuxtImg
          src="/images/logo.png"
          alt="MenuMate Logo"
          width="120"
          class="mx-auto"
          format="webp"
        />
      </NuxtLink>

      <!-- Navigation Links -->
      <nav
        class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium tracking-wide uppercase"
      >
        <NuxtLink
          to="/policy/terms"
          class="hover:underline hover:text-brand-text-dark transition"
          >Terms</NuxtLink
        >
        <NuxtLink
          to="/policy/usage"
          class="hover:underline hover:text-brand-text-dark transition"
          >Usage Policy</NuxtLink
        >
        <NuxtLink
          to="/policy/privacy"
          class="hover:underline hover:text-brand-text-dark transition"
          >Privacy</NuxtLink
        >
        <NuxtLink
          to="/policy/accessibility"
          class="hover:underline hover:text-brand-text-dark transition"
          >Accessibility</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="hover:underline hover:text-brand-text-dark transition"
          >Contact</NuxtLink
        >
      </nav>

      <!-- Copyright -->
      <div class="text-xs text-brand-text-medium">
        &copy; 2025
        <span class="font-semibold text-brand-text-dark">MenuMate</span>. All
        rights reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const authStore = useAuthStore();

const logoLink = computed(() => {
  if (authStore.authenticated) return { path: "/dashboard" };
  else return { path: "/" };
});

</script>


<style></style>
