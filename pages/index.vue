<template>
  <NuxtLayout name="default">
    <div>
      <Modal
        :is-open="isOpen"
        :close-modal="closeModal"
        :modal-content="currentModalContent"
      />
      <Header />
      <!-- <TextLeftImgRight /> -->
      <Skills :skill-set="skillWithLogo" />
      <TimelineSection :timeline="timeline" />
      <WorkSection
        :working-projects="workingProjects"
        :on-click-function="showModal"
      />
      <div id="projects"></div>
      <ProjectSection :projects="projects" />
    </div>
  </NuxtLayout>
</template>
<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "김어진의 포트폴리오",
  author: {
    "@type": "Person",
    "@id": "#kimuj5090",
  },
  url: "https://kimej.github.io/portfolio/",
  description:
  "김어진의 개인 포트폴리오 웹 사이트",
    keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer",
  image: "https://kimej.github.io/portfolio/fotis-fotopoulos-6sAl6aQ4OWI.webp.png",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#kimuj5090",
  name: "김어진",
  email: "kimuj5090@gmail.com",
  url: "https://kimej.github.io/portfolio/",
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

//const
const { skillWithLogo, projects, workingProjects, timeline } =
  useConstants();

// modal functionality
const isOpen = ref(false);
const currentModalContent = ref({});
const showModal = (content) => {
  // lock page height?
  // fill up modals with details
  // open modal
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

onMounted(() => {
  document.addEventListener("keyup", function (event) {
    if (isOpen.value && event.key === "Escape") {
      closeModal();
    }
  });
});
</script>
