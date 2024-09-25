<script setup>
import MainServiceCard from "./MainServiceCard.vue";
</script>

<template>
  <section class="flex flex-col items-center py-20 px-6 gap-10 font-montserrat bg-[var(--r-color)] rounded-3xl">
    <p
      class="font-semibold text-2xl md:text-3xl text-[var(--p-color)] font-lidren"
    >
      Наши услуги
    </p>
    <div
      class="flex max-md:flex-col md:grid grid-flow-row-dense grid-cols-2 grid-rows-2 xl:flex xl:justify-center xl:gap-4 gap-10 max-md:w-3/4"
    >
      <main-service-card
        title="Роспись стен в офисе"
        imgURL="./arts/main-servise-office.png"
      />
      <main-service-card
        title="Роспись фасада"
        imgURL="./arts/wall-girl-1.png"
      />
      <main-service-card
        title="Роспись в детской"
        imgURL="./arts/spyro.png"
      />
      <main-service-card
        title="Роспись стен в квартире"
        imgURL="./arts/paint-girl-2.png"
      />
    </div>
  </section>
</template>
