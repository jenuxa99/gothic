<script setup>
import { defineComponent, ref } from "vue";
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
      Наша дружная команда
    </p>
    <Carousel
      class="w-full"
      :items-to-show="itemToShow()"
      :wrap-around="true"
      :modelValue="1"
    >
      <Slide v-for="slide in items" :key="slide.id">
        <div
          class="relative flex flex-col p-5 border border-gray-100 rounded-xl shadow-xl mx-5 my-20 bg-red-100"
        >
          <img
            class="w-full h-auto rounded-lg"
            :src="slide.imgURL"
            :alt="slide.name"
          />
          <img
            class="absolute w-12 right-3 top-3 bg-gray-300 rounded-full"
            :src="slide.homelandImgURL"
            :alt="slide.name"
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
