<script setup>
import {
  ref,
  watch,
  provide,
} from "vue";

import { dataStorage } from "../store/data.js";

import MainFace from "../components/MainFace.vue";
import MainDescription from "../components/MainDescription.vue";
import MainService from "../components/MainService.vue";
import MainPride from "../components/MainPride.vue";
import MainWorks from "../components/MainWorks.vue";
import MainPrices from "../components/MainPrices.vue";
import MainTeam from "../components/MainTeam.vue";
import MainPublications from "../components/MainPublications.vue";
import Footer from "../components/Footer.vue";

const store = dataStorage();

const showPopup = ref(false);
const phone = ref("");

const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

const handleClick = () => {
  if (isMobile()) {
    window.location.href = "tel:+1234567890";
  } else {
    showPopup.value = true;
  }
};

const closePopup = () => {
  showPopup.value = false;
};

const formatPhoneNumber = () => {
  let input = phone.value.replace(/\D/g, "");
  let formattedInput = "+7 (";

  if (input.length > 1) {
    formattedInput += input.substring(1, 4);
  }
  if (input.length >= 5) {
    formattedInput += ") " + input.substring(4, 7);
  }
  if (input.length >= 8) {
    formattedInput += "-" + input.substring(7, 9);
  }
  if (input.length >= 10) {
    formattedInput += "-" + input.substring(9, 11);
  }

  phone.value = formattedInput;
};

provide("popup", handleClick);
watch(phone, formatPhoneNumber);
</script>

<template>
  <section>
    <MainFace :handleClick="handleClick" />
    <MainDescription />
    <MainService />
    <MainPride :items="store.artists" />
    <MainWorks />
    <MainTeam :items="store.artists" />
    <MainPrices :handleClick="handleClick" />
    <MainPublications :items="store.paper" />
    <Footer :checkboxes="store.navbarItems" />
    <aside
      v-if="showPopup"
      class="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50"
    >
      <div
        class="flex flex-col items-center gap-5 bg-[var(--p-color)] p-10 rounded-xl"
      >
        <p class="text-xl text-[var(--r-color)]">Закажите обратный звонок!</p>
        <form
          action="submit"
          class="flex flex-col gap-5 font-montserrat items-end"
        >
          <div class="flex gap-3">
            <label for="phone">Телефон:</label>
            <input
              id="phone"
              type="text"
              v-model="phone"
              @input="formatPhoneNumber"
              placeholder="+7 (___) ___-__-__"
              required
              class="border focus:border-[var(--r-color)] outline-none rounded-lg px-2"
            />
          </div>
          <div class="flex gap-3">
            <label for="phone">Имя:</label>
            <input
              class="border focus:border-[var(--r-color)] outline-none rounded-lg px-2"
              type="text"
              required
            />
          </div>
          <div class="flex gap-3">
            <label for="phone">Почта</label>
            <input
              class="border focus:border-[var(--r-color)] outline-none rounded-lg px-2"
              type="email"
              required
            />
          </div>
          <div class="flex justify-between w-full">
            <button
              type="submit"
              class="mt-2 bg-[var(--r-color)] text-white py-1 px-2 rounded-md"
            >
              Отправить
            </button>
            <button
              @click="closePopup"
              class="mt-2 bg-[var(--r-color)] text-white py-1 px-2 rounded-md"
            >
              Закрыть
            </button>
          </div>
        </form>
        <em class="text-sm">Оставьте Ваши контакты и мы свяжемся с Вами!</em>
      </div>
    </aside>
  </section>
</template>
