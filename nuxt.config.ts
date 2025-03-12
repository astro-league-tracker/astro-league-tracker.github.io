import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ['@/assets/styles.css'],
  devtools: { enabled: true },
  nitro: {
    prerender: {
      ignore: [/^\/admin\/.*/]
    }
  },
  srcDir: "src/",
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
