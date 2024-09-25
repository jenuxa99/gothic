<script setup>
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

defineProps({
  items: Array,
});

defineComponent({
  name: "Breakpoints",
  name: "WrapAround",
  name: "Autoplay",
});

const breakpoints = ref({
  1024: {
    itemsToShow: 3,
  },
});
</script>

<template>
  <section class="pt-20 mb-20">
    <p
      class="font-semibold text-2xl md:text-3xl text-[var(--r-color)] font-lidren text-center"
    >
      Полезные статьи
    </p>
    <Carousel
      :autoplay="2000"
      :breakpoints="breakpoints"
      class="w-full"
      :wrap-around="true"
      :modelValue="1"
    >
      <Slide v-for="slide in items" :key="slide.id">
        <div
          class="min-h-[650px] flex flex-col justify-between p-5 border border-black rounded-xl shadow-xl mx-5 mt-20 bg-[var(--p-color)]"
        >
          <img
            class="w-full h-auto object-cover rounded-xl"
            :src="slide.imgURL"
            :alt="slide.title"
            loading="lazy"
          />
          <p class="font-inter font-normal text-left text-lg py-2">
            {{ slide.title }}
          </p>
          <p class="text-left text-sm font-montserrat">
            {{ slide.description }}
          </p>
          <div
            class="flex justify-between items-center p-3 text-lg font-montserrat"
          >
            <em>{{ slide.autor }}</em>
            <em>{{ slide.country }}</em>
          </div>
          <RouterLink
            to="/inDevelop"
            class="bg-[var(--r-color)] text-white rounded-md w-max my-2 py-2 px-5 cursor-cartoon border border-black duration-300"
          >
            Подробнее
          </RouterLink>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>
