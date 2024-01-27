<script setup>
//const
const { timeline } = useConstants();
useHead({
  title: "김어진의 포트폴리오 | Career Journey",
  meta: [
    {
      property: "og:title",
      content: "김어진의 포트폴리오 | Career Journey",
    },
    {
      property: "og:site_name",
      content: "김어진의 포트폴리오 | Career Journey",
    },
    {
      property: "og:site",
      content: "/timeline",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default"
    ><TimelineSection :timeline="timeline"
  /></NuxtLayout>
</template>
