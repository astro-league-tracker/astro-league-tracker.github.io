import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/eslint"],
    devtools: { enabled: true },
    css: ["@/assets/styles.css"],
    srcDir: "src/",
    compatibilityDate: "2024-11-01",

    nitro: {
        prerender: {
            ignore: [/^\/admin\/.*/],
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    typescript: {
        typeCheck: true,
    },
});
