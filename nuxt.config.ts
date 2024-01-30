import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ko",
      },
      title: "김어진의 포트폴리오",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "김어진의 개인 포트폴리오 웹 사이트",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Kim Eo Jin" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "김어진의 포트폴리오",
        },
        {
          property: "og:site",
          content: "https://portfolio-kimej.vercel.app/",
        },
        {
          property: "og:title",
          content: "김어진의 포트폴리오",
        },
        {
          property: "og:description",
          content:
            "김어진의 개인 포트폴리오 웹 사이트",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "/favicons/favicon.ico",
        },
        // google site verification
        {
          name: "google-site-verification",
          content: "", //TODO: add google site verification
        },
      ],
      link: [{ rel: "icon", href: "/favicons/favicon.ico" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
});
