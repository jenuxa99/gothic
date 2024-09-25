<script setup>
import Header from "./components/Header.vue";

window.addEventListener("load", () => {
  console.log(`Страница загружена за ${performance.now()} мс`);
});
</script>

<template>
  <div
    class="w-full xl:max-w-[1280px] m-0 xl:my-20 xl:mx-auto rounded-2xl xl:shadow-2xl"
  >
    <Header
      class="sticky top-0 xl:top-[-15px] shadow-sm xl:shadow-xl rounded-b-2xl xl:rounded-2xl"
    />
    <main>
      <RouterView />
    </main>
  </div>
</template>