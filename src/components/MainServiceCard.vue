<script setup>
defineProps({
    imgURL: String,
    title: String,
})
</script>

<template>
  <div
    class="group flex flex-col items-center justify-between gap-5 border border-black p-3 pb-5 rounded-2xl shadow-xl lg:hover:translate-y-[-30px] bg-[var(--p-color)] duration-300"
  >
    <div class="rounded-xl overflow-hidden">
      <img :src="imgURL" alt="" />
    </div>
    <p class="text-center font-semibold text-[20px] text-[var(--r-color)]">{{ title }}</p>
    <RouterLink
      to="/inDevelop"
      class="bg-white text-[var(--r-color)] rounded-md py-2 px-4 border border-[var(--r-color)] group-hover:bg-[var(--r-color)] group-hover:text-white duration-300 cursor-cartoon"
    >
      Подробнее
    </RouterLink>
  </div>
</template>
