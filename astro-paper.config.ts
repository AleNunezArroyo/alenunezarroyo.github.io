import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://alenunezarroyo.github.io/",
    title: "Alejandro Núñez Arroyo",
    description:
      "Alejandro Núñez Arroyo — research on LLM-based agents and multi-agent systems.",
    author: "Alejandro Núñez Arroyo",
    profile: "https://www.linkedin.com/in/alejandronunezarroyo/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Sao_Paulo",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/AleNunezArroyo/alenunezarroyo.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "linkedin",  url: "https://www.linkedin.com/in/alejandronunezarroyo/", linkTitle: "LinkedIn" },
    { name: "instagram", url: "https://www.instagram.com/alenunezarroyo/",         linkTitle: "Instagram" },
    { name: "x",         url: "https://x.com/alenunezarroyo/",                     linkTitle: "X" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});