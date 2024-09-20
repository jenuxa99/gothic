<script setup>
defineProps({
  checkboxes: Array,
});
</script>

<template>
  <footer
    class="flex flex-col items-center gap-10 pt-10 xl:pt-20 bg-[var(--p-color)] xl:rounded-b-2xl"
  >
    <section class="flex justify-center gap-5 xl:gap-20">
      <aside v-for="checkbox in checkboxes" :key="checkbox.id" class="">
        <strong class="text-[var(--r-color)] select-none">{{
          checkbox.label
        }}</strong>
        <nav class="flex flex-col gap-3 pt-4">
          <RouterLink
            to="/inDevelop"
            v-for="(item, index) in checkbox.menuItems"
            :key="index"
            class="font-light text-[14px] leading-[17px] cursor-cartoon hover:translate-x-2 duration-300 select-none"
          >
            {{ item }}
          </RouterLink>
        </nav>
      </aside>
    </section>
    <section class="pb-10">
      <p class="font-light text-[10px]">
        © 2018-2024, Gothic - скоростная роспись стен
      </p>
    </section>
  </footer>
</template>
