<script setup>
//const
const { projects } = useConstants();
useHead({
  title: "김어진의 포트폴리오 | 개인 프로젝트",
  meta: [
    {
      property: "og:title",
      content: "김어진의 포트폴리오 | 개인 프로젝트",
    },
    {
      property: "og:site_name",
      content: "김어진의 포트폴리오 | 개인 프로젝트",
    },
    {
      property: "og:site",
      content: "/projects",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <ProjectSection :projects="projects" />
  </NuxtLayout>
</template>
