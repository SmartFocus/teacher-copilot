export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  elementPlus: {
    themes: ["dark"],
  },
  runtimeConfig: {
    openai: {
      basePath: process.env.OPENAI_BASE_PATH,
      apiKey: process.env.OPENAI_API_KEY,
    },
  },
});
