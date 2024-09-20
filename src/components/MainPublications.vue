<script setup>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});

defineProps({
  itemToShow: Function,
  items: Array,
});
</script>

<template>
  <section>
    <p class="font-semibold text-[26px] text-center text-[var(--r-color)]">
      Полезные статьи
    </p>
    <Carousel class="w-full" :items-to-show="itemToShow()" :wrap-around="true">
      <Slide class="" v-for="slide in items" :key="slide.id">
        <div
          class="border border-gray-100 rounded-xl shadow-xl my-10 mx-4 w-3/4 xl:w-full"
        >
          <div class="flex flex-col items-center p-5">
            <img
              class="w-full h-96 bg-[var(--r-color)] rounded-lg"
              :src="slide.imgURL"
              :alt="slide.title"
            />
            <strong class="font-inter text-center text-lg py-2">{{
              slide.title
            }}</strong>
            <p class="font-montserrat text-sm py-2">{{ slide.description }}</p>
            <div class="flex justify-between w-full py-2">
              <strong class="font-inter">{{ slide.autor }}</strong>
              <em class="font-sangha">{{ slide.country }}</em>
            </div>
            <RouterLink to="/inDevelop"
              class="my-2 bg-white text-[var(--r-color)] rounded-md py-2 px-5 cursor-cartoon border border-[var(--r-color)] hover:text-white hover:bg-[var(--r-color)] duration-300"
            >
              Подробнее
            </RouterLink>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>
