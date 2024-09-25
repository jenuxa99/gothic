<script setup>
defineProps({
  imgURL: String,
  title: String,
});
</script>

<template>
  <div
    class="group relative w-full h-auto overflow-hidden rounded-2xl shadow-2xl border border-black"
  >
    <img
      class="object-cover group-hover:scale-105 duration-300"
      :src="imgURL"
      loading="lazy"
    />
    <RouterLink
      to="/inDevelop"
      class="absolute md:bottom-1 md:right-1 font-light text-sm text-right text-[var(--text-color)] bg-[var(--p-color)] rounded-md px-3 md:group-hover:translate-y-[-10px] max-xl:group-hover:translate-x-[-10px] duration-300 cursor-cartoon border border-black text-wrap"
    >
      {{ title }}
    </RouterLink>
  </div>
</template>
