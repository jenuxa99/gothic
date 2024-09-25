<script setup>
import MainPrideItem from "./MainPrideItem.vue";

defineProps({
  items: Array,
});
</script>

<template>
  <section class="flex flex-col items-center py-20 px-16 gap-10 font-montserrat">
    <p
      class="font-semibold text-2xl md:text-3xl text-[var(--r-color)] font-lidren"
    >
      Наша гордость
    </p>
    <div
      class="grid grid-flow-row-dense grid-cols-2 xl:grid-cols-5 xl:grid-rows-2 gap-5"
    >
      <MainPrideItem :title="items[0].name" :imgURL="items[0].imgURL" />
      <MainPrideItem :title="items[3].name" :imgURL="items[3].imgURL" />
      <MainPrideItem :title="items[14].name" :imgURL="items[14].imgURL" />
      <MainPrideItem :title="items[13].name" :imgURL="items[13].imgURL" />
      <MainPrideItem :title="items[6].name" :imgURL="items[6].imgURL" />
      <MainPrideItem :title="items[9].name" :imgURL="items[9].imgURL" />
      <MainPrideItem :title="items[8].name" :imgURL="items[8].imgURL" />
      <MainPrideItem :title="items[1].name" :imgURL="items[1].imgURL" />
      <MainPrideItem :title="items[2].name" :imgURL="items[2].imgURL" />
      <MainPrideItem :title="items[19].name" :imgURL="items[19].imgURL" />
    </div>
  </section>
</template>
