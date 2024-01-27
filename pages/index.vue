<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "김어진의 포트폴리오",
  author: {
    "@type": "Person",
    "@id": "#kimuj5090",
  },
  // url: "https://www.eazypau.com/",
  description:
    "김어진의 개인 포트폴리오 웹 사이트",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer",
  // image: "https://www.eazypau.com/profile-pics/profile.webp",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#kimuj5090",
  name: "Kim Eo Jin",
  email: "kimuj5090@gmail.com",
  // url: "https://www.eazypau.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
