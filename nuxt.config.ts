// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  googleFonts: {
    families: {
      montserrat: {
        wght: [300, 400, 500, 600, 700, 800],
      },
      "Open Sans": {
        wght: [300, 400, 500, 600, 700, 800],
      },
    },
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en", // or 'es', 'fr', etc.
      },
    },
  },
});