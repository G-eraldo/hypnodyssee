export default defineNuxtConfig({
  compatibilityDate: "2026-09-01",
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo"],
  css: ["~/assets/site.css"],
  devtools: { enabled: false },
  site: {
    name: "Hypn’Odyssée Bien naître",
    defaultLocale: "fr",
    url: process.env.NUXT_SITE_URL || "https://hypnodyssee.fr",
  },
  ogImage: { enabled: false },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Hypn’Odyssée Bien naître",
      logo: "/images/sceau.webp",
      sameAs: ["https://www.instagram.com/hypnodyssee.biennaitre/"],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "fr" },
      link: [{ rel: "icon", href: "/images/sceau.webp" }],
    },
  },
  runtimeConfig: { resendApiKey: "", contactFrom: "", contactTo: "" },
});
