<script setup>
defineProps({
  items: Array,
});
</script>

<template>
  <section
    class="flex flex-col items-center xl:py-20 px-3 xl:px-6 font-montserrat"
  >
    <p
      class="font-semibold text-[26px] text-center pb-10 font-inter text-[var(--r-color)]"
    >
      Наша гордость
    </p>
    <div
      class="grid grid-flow-row-dense grid-cols-2 xl:grid-cols-5 xl:grid-rows-2 gap-5"
    >
      <div
        class="group relative w-[232px] h-[213px] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[0].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[0].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[3].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[3].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[14].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[14].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[13].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[13].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[6].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[6].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[9].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[9].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[8].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[8].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[1].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[1].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[2].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[2].name }}
        </p>
      </div>
      <div
        class="group relative w-[232px] h-[213px] bg-[var(--r-color)] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          class="group-hover:scale-105 duration-300"
          :src="items[19].imgURL"
          alt=""
        />
        <p
          class="absolute bottom-2 right-4 text-sm text-[var(--text-color)] bg-[var(--p-color)] rounded-lg px-3 font-light group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] duration-300 cursor-cartoon"
        >
          {{ items[19].name }}
        </p>
      </div>
    </div>
  </section>
</template>
