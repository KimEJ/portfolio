<script setup>
//const
const { skillWithLogo } = useConstants();
useHead({
  title: "김어진의 포트폴리오 | Skills",
  meta: [
    {
      property: "og:title",
      content: "김어진의 포트폴리오 | Skills",
    },
    {
      property: "og:site_name",
      content: "김어진의 포트폴리오 | Skills",
    },
    {
      property: "og:site",
      content: "/skills",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <Skills :skill-set="skillWithLogo" />
  </NuxtLayout>
</template>
