<script setup>
const { workingProjects } = useConstants();
// modal functionality
const isOpen = ref(false);
const currentModalContent = ref({});
const showModal = (content) => {
  currentModalContent.value = content;
  isOpen.value = true;
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  isOpen.value = false;
  document.body.style.height = "auto";
  document.body.style.overflow = "visible";
};

useHead({
  title: "김어진의 포트폴리오 | Career Highlights",
  meta: [
    {
      property: "og:title",
      content: "김어진의 포트폴리오 | Career Highlights",
    },
    {
      property: "og:site_name",
      content: "김어진의 포트폴리오 | Career Highlights",
    },
    {
      property: "og:site",
      content: "/works",
    },
  ],
});

onMounted(() => {
  document.addEventListener("keyup", function (event) {
    if (isOpen.value && event.key === "Escape") {
      closeModal();
    }
  });
});
</script>
<template>
  <NuxtLayout name="default">
    <Modal
      :is-open="isOpen"
      :close-modal="closeModal"
      :modal-content="currentModalContent"
    />
    <WorkSection
      :working-projects="workingProjects"
      :on-click-function="showModal"
    />
  </NuxtLayout>
</template>
