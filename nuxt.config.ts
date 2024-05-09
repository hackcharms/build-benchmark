// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  devtools: { enabled: true },
  ssr: false,

  build: {
    transpile: ["vuetify/lib"],
  },

  modules: ["@nuxt/ui"]
});