// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  elementPlus: {
    themes: ["dark"],
  },
  // You might not need it if you're not using pnpm
  alias: {
    "node:util": path.resolve(
      __dirname,
      "node_modules/unenv/runtime/node/util/index.cjs"
    ),
    "node:net": path.resolve(
      __dirname,
      "node_modules/unenv/runtime/node/net/index.cjs"
    ),
  },
  runtimeConfig: {
    openai: {
      basePath: process.env.OPENAI_BASE_PATH,
      apiKey: process.env.OPENAI_API_KEY,
    },
  },
});
