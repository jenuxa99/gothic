<script setup>
import { dataStorage } from "./store/functions.js";
import Header from "./components/Header.vue";

const store = dataStorage();
</script>

<template>
  <div
    class="w-full xl:w-3/4 xl:m-auto xl:mt-20 xl:mb-20 m-0 rounded-2xl shadow-sm xl:shadow-2xl"
  >
    <Header
      :checkboxes="store.checkboxes"
      class="sticky top-[-15px] shadow-lg xl:rounded-2xl rounded-none"
    />
    <main>
      <RouterView />
    </main>
  </div>
</template>
