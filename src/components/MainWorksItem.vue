<script setup>
defineProps({
  imgURL: String,
  customClass: String,
});
</script>
<template>
  <div class="rounded-xl overflow-hidden shadow-2xl border border-black" :class="customClass">
    <img class="h-full object-cover" :src="imgURL" loading="lazy" />
  </div>
</template>
