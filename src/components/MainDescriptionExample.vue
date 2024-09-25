<script setup>
defineProps({
  title: String,
  customClass: String,
});
</script>

<template>
  <div
    class="md:flex items-center justify-center text-sm md:text-lg border border-black bg-[var(--p-color)] rounded-xl py-5 xl:py-12 shadow-md"
    :class="customClass"
    v-html="title"
  ></div>
</template>