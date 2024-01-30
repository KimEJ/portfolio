<template>
  <header class="headerHeight">
    <div style="background: #000;">
      <img
        src="/fotis-fotopoulos-6sAl6aQ4OWI.webp.png"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 80vw, (max-width: 1439px) 100vw"
        alt="laptop with black background"
      />
    </div>
    <div>
      <h1>
        <MyTransition>
          <span v-if="!loading" class="flex justify-center">
            안녕하세요!
            <!-- <span>
              <IconsHiIcon class="ml-3 p-1" />
            </span> -->
          </span>
        </MyTransition>
        <MyTransition :delay="Number(1.1)">
          <span v-if="!loading" class="mt-1 tracking-wide text-white">
            {{ annual() }}년차 개발자
          </span>
        </MyTransition>
        <MyTransition :delay="Number(1.3)">
          <span v-if="!loading" class="mt-2 tracking-wide text-white">
            김어진입니다.
          </span>
        </MyTransition>
      </h1>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted } from "vue";

const annual = () => {
  const date = new Date();
  return date.getFullYear() - 2018;
};
const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>
<style lang="scss" scoped>
.headerHeight {
  height: calc(100vh - 70px);
}
</style>
