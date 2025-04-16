<template>
  <ClientOnly>
    <AuthBackground>
      <div
        class="max-sm:w-full sm:rounded-md max-sm:px-4 max-sm:py-8 shadow-main fixed top-1/2 -translate-y-1/2 bg-brand-background-primary/80 sm:w-3/4 sm:p-8 sm:left-1/2 sm:-translate-x-1/2 md:w-1/2"
      >
        <NuxtImg
          src="/images/login-logo.png"
          alt="MenuMate Login Logo"
          class="w-4/6 mx-auto"
          width="300px"
          format="webp"
        />
        <div
          class="shadow-inner-main p-8 my-8 font-open-sans text-brand-text-dark bg-brand-white rounded-lg"
        >
          <form @submit.prevent="loginEmail" class="flex flex-col">
            <div class="flex flex-col">
              <label class="font-extrabold text-xs mb-2">Email:</label>
              <input
                type="text"
                id="email"
                autocomplete="email"
                v-model="email"
                placeholder="email@email.com"
                class="p-2 border-2 bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"
              />
            </div>
            <div class="flex flex-col">
              <label class="font-extrabold text-xs mb-2">Password:</label>
              <div class="relative w-full">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  autocomplete="current-password"
                  v-model="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  class="p-2 border-2 w-full bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1 text-brand-link p-2 hover:text-brand-accent"
                  aria-label="hide/show password"
                >
                  <Icon :name="showPassword ? 'mdi:eye-off' : 'mdi:eye'" />
                </button>
              </div>
            </div>
            <button
              type="submit"
              class="xs:w-4/6 max-xs:w-full mx-auto my-2 bg-brand-primary py-3 rounded-lg border-2 border-brand-accent font-bold text-brand-text-dark hover:bg-brand-secondary transition-colors duration-300 ease-in-out"
            >
              Login
            </button>
          </form>
          <div class="flex justify-center items-center gap-4">
            <span class="w-1/3 h-[1px] bg-brand-border/50 inline-block"></span
            ><span>or</span
            ><span class="w-1/3 h-[1px] bg-brand-border/50 inline-block"></span>
          </div>
          <button
            @click="loginGoogle"
            class="flex gap-2 justify-center items-center xs:w-4/6 max-sm:w-full mx-auto mt-2 py-3 rounded-lg border-2 border-brand-accent text-brand-text-dark hover:bg-gray-100 transition-colors duration-300 ease-in-out"
          >
            <Icon name="logos:google-icon" class="flex" />Login with Google
          </button>
        </div>
        <p v-if="authStore.error" class="text-center text-brand-error">
          {{ authStore.error }}
        </p>
        <p v-else class="text-center">
          Don't have an account?
          <NuxtLink
            to="/register"
            class="text-brand-link underline hover:text-brand-accent"
            >Sign-up</NuxtLink
          >
          now!
        </p>
      </div>
    </AuthBackground>
  </ClientOnly>
</template>

<script lang="ts" setup>
useHead({
  title: 'MenuMate | User Login',
  meta: [
    { name: 'description', content: 'Log in to MenuMate to access your saved recipes, custom cookbooks, shopping lists, and meal plans. Simple, fast, and secure access to your kitchen tools.' }
  ],
})

definePageMeta({
  layout: "auth",
});

const email = ref<string>("");
const password = ref<string>("");
const showPassword = ref(false);

const firebaseAuth = useFirebaseAuth();
const authStore = useAuthStore();

const loginEmail = async () => {
  await firebaseAuth.loginUserWithEmail(email.value, password.value);
  navigateTo({ path: "/dashboard" });
};

const loginGoogle = async () => {
  await firebaseAuth.loginUserWithGoogle();
  navigateTo({ path: "/dashboard" });
};

onMounted(async () => {
  if ((await firebaseAuth.resolvedAuth()) && authStore.authenticated)
    navigateTo({ path: "/dashboard" });
});
</script>

<style></style>
