<script setup>
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

defineProps({
  items: Array,
});

defineComponent({
  name: "Breakpoints",
  name: "WrapAround",
});

const breakpoints = ref({
  1024: {
    itemsToShow: 3,
  },
});
</script>

<template>
  <section class="py-20">
    <p
      class="font-semibold text-2xl md:text-3xl text-[var(--r-color)] font-lidren text-center"
    >
      Наша дружная команда
    </p>
    <Carousel
      :breakpoints="breakpoints"
      class="w-full"
      :wrap-around="true"
      :modelValue="1"
    >
      <Slide v-for="slide in items" :key="slide.id">
        <div
          class="relative flex flex-col p-5 border border-black rounded-xl shadow-xl mx-10 lg:mx-5 my-20 bg-red-100"
        >
          <img
            class="w-full h-auto object-cover rounded-lg"
            :src="slide.imgURL"
            :alt="slide.name"
          />
          <img
            class="absolute w-12 right-3 top-3 bg-gray-300 rounded-full"
            :src="slide.homelandImgURL"
            :alt="slide.name"
            loading="lazy"
          />
          <div class="flex justify-between items-center p-3">
            <strong class="text-lg font-inter">{{ slide.name }}</strong>
            <em class="font-sangha text-sm">{{ slide.homeland }}</em>
          </div>
          <p class="text-left text-sm font-montserrat">{{ slide.bio }}</p>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .carousel__slide--sliding {
    transition: 0.5s;
  }

  .carousel__slide--prev {
    transform: scale(0.95);
  }

  .carousel__slide--next {
    transform: scale(0.95);
  }

  .carousel__slide--active {
    transform: scale(1.1);
  }
}
</style>
