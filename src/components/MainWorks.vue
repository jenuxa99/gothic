<script setup>
import MainWorksItem from "./MainWorksItem.vue";
</script>

<template>
  <section class="flex flex-col items-center py-20 px-6 gap-10 font-montserrat bg-[var(--r-color)] rounded-3xl">
    <p
      class="font-semibold text-2xl md:text-3xl text-[var(--p-color)] font-lidren"
    >
      Наши работы
    </p>
    <div
      class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-3 m-auto"
    >
      <main-works-item
        imgURL="./arts/works-ny-graph-1.png"
        customClass="row-span-2 lg:row-span-3 lg:col-span-1"
      />
      <main-works-item
        imgURL="./arts/works-room-wall-1.png"
        customClass="lg:row-span-1 lg:col-span-1"
      />
      <main-works-item
        imgURL="./arts/works-loft.png"
        customClass="lg:col-span-1 lg:row-span-2"
      />
      <div
        class="col-span-2 lg:row-span-1 lg:col-span-1 bg-[var(--p-color)] rounded-xl overflow-hidden shadow-2xl flex justify-center items-center cursor-cartoon"
      >
        <RouterLink
          to="/inDevelop"
          class="text-[var(--r-color)] font-normal xl:text-3xl lg:text-2xl text-center lg:leading-7 xl:leading-10 font-montserrat p-5 cursor-cartoon"
        >
          Посмотреть<wbr /> портфолио
        </RouterLink>
      </div>
      <main-works-item
        imgURL="./arts/wall.png"
        customClass="lg:col-span-1 lg:row-span-2"
      />
      <main-works-item
        imgURL="./arts/works-kido.png"
        customClass="lg:row-span-2 lg:col-span-1"
      />
      <main-works-item
        imgURL="./arts/works-jesus.png"
        customClass="col-span-2 lg:row-span-1 lg:col-span-1"
      />
    </div>
  </section>
</template>
