<script setup>
import { inject } from 'vue';

defineProps({
  content: Array,
});

const handleClick = inject('popup')
</script>

<template>
  <div class="flex flex-col xl:flex-row items-center justify-center gap-10">
    <div
      v-for="(item, index) in content"
      :key="index"
      class="flex flex-col gap-4 border border-black rounded-2xl shadow-2xl py-10 px-5 w-5/6 xl:w-1/3 text-2xl bg-[var(--p-color)]"
    >
      <strong class="text-[var(--r-color)] font-inter">{{ item.level }}</strong>
      <p class="text-gray-600 text-sm w-5/6">{{ item.title }}</p>
      <p
        class="font-bold text-[var(--text-color)] max-[500px]:text-3xl text-6xl border border-transparent border-b-gray-400"
      >
        ₽{{ item.price
        }}<sup class="font-semibold text-lg align-super">/за м<sup>2</sup></sup>
      </p>
      <ul class="flex flex-col gap-1 text-sm py-3">
        <li
          class="flex gap-2"
          v-for="(line, lineIndex) in item.conditions"
          :key="lineIndex"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            class="min-w-5"
          >
            <path
              fill-rule="evenodd"
              d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
              fill="var(--r-color)"
            />
          </svg>
          <p class="text-wrap">{{ line }}</p>
        </li>
      </ul>
      <button
        @click="handleClick"
        class="text-lg text-center rounded-lg py-2 px-5 m-auto cursor-cartoon border border-[var(--text-color)] text-white bg-[var(--r-color)] duration-300"
      >
        ЗАКАЗАТЬ
      </button>
    </div>
  </div>
</template>
