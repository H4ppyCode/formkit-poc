// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss'],

  formkit: {
    // Experimental support for auto loading (see note):
    configFile: './formkit.config.ts',

    autoImport: true
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})