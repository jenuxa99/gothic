<script setup>
import { onMounted, ref } from "vue";
import Header from "./components/Header.vue";

// Состояния загрузки и прелоадера
let isLoading = ref(true);
let preloader = ref(true);

// Изначальный стиль контента
const contentStyle = ref("opacity-0");

// Удаление прелоадера и появление контента
const isUploaded = () => {
  isLoading.value = false;
  setTimeout(() => {
    contentStyle.value = 'opacity-100 w-full xl:max-w-[1280px] m-0 xl:my-20 xl:mx-auto rounded-2xl xl:shadow-2xl transition-opacity duration-1000'
  }, 300)
};

onMounted(() => {
  window.addEventListener("load", () => {
    // Задержка между анимацией ухода прелоадера и его удалением
    setTimeout(() => {
      isUploaded()
    }, 300);
    preloader.value = false;
    console.log(`Страница загружена за ${performance.now()} мс`);
  });
})
</script>

<template>
  <section>
    <section v-if="isLoading" :class="{
      'relative h-screen bg-[var(--p-color)]': preloader,
      'transition-opacity duration-300 opacity-0': !preloader
    }">
      <div class="loader">
        <div class="cell d-0"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
      </div>
    </section>
    <main v-show="!isLoading" :class="contentStyle">
      <Header class="sticky top-0 xl:top-[-15px] shadow-sm xl:shadow-xl rounded-b-2xl xl:rounded-2xl" />
      <aside>
        <RouterView />
      </aside>
    </main>
  </section>

</template>