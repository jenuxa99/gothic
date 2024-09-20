<template>
  <section class="py-20 px-6 font-montserrat">
    <p class="font-semibold text-[26px] text-center pb-10 font-inter text-[var(--r-color)]">Наши услуги</p>
    <div class="grid grid-flow-row-dense grid-cols-2 grid-rows-2 xl:flex xl:justify-center xl:gap-4 gap-10">
      <div
        class="group flex flex-col items-center gap-5 border border-gray-200 p-3 pb-5 rounded-2xl shadow-xl hover:translate-y-[-30px] duration-300"
      >
        <div
          class="rounded-xl overflow-hidden"
        >
          <img class="" src="/arts/main-servise-office.png" alt="" />
        </div>
        <p class="text-center font-semibold text-[20px]">
          Роспись стен в офисе
        </p>
        <RouterLink to="/inDevelop"
          class="bg-white text-[var(--r-color)] rounded-md py-2 px-4 border border-[var(--r-color)] group-hover:bg-[var(--r-color)] group-hover:text-white duration-300 cursor-cartoon"
        >
          Подробнее
        </RouterLink>
      </div>
      <div
        class="group flex flex-col items-center gap-5 border border-gray-200 p-3 pb-5 rounded-2xl shadow-xl hover:translate-y-[-30px] duration-300"
      >
        <div
          class="rounded-xl overflow-hidden"
        >
          <img class="object-contain" src="/arts/main-servise-graph.png" alt="" />
        </div>
        <p class="text-center font-semibold text-[20px]">Граффити</p>
        <RouterLink to="/inDevelop"
          class="bg-white text-[var(--r-color)] rounded-md py-2 px-4 border border-[var(--r-color)] group-hover:bg-[var(--r-color)] group-hover:text-white duration-300 cursor-cartoon"
        >
          Подробнее
        </RouterLink>
      </div>
      <div
        class="group flex flex-col items-center gap-5 border border-gray-200 p-3 pb-5 rounded-2xl shadow-xl hover:translate-y-[-30px] duration-300"
      >
        <div
          class="rounded-xl overflow-hidden"
        >
          <img class="object-contain" src="/arts/main-servise-kido.png" alt="" />
        </div>
        <p class="text-center font-semibold text-[20px]">Роспись в детской</p>
        <RouterLink to="/inDevelop"
          class="bg-white text-[var(--r-color)] rounded-md py-2 px-4 border border-[var(--r-color)] group-hover:bg-[var(--r-color)] group-hover:text-white duration-300 cursor-cartoon"
        >
          Подробнее
        </RouterLink>
      </div>
      <div
        class="group flex flex-col items-center gap-5 border border-gray-200 p-3 pb-5 rounded-2xl shadow-xl hover:translate-y-[-30px] duration-300"
      >
        <div
          class="rounded-xl overflow-hidden"
        >
          <img class="object-contain" src="/arts/main-servise-apart.png" alt="" />
        </div>
        <p class="text-center font-semibold text-[20px]">Роспись в квартире</p>
        <RouterLink to="/inDevelop"
          class="bg-white text-[var(--r-color)] rounded-md py-2 px-4 border border-[var(--r-color)] group-hover:bg-[var(--r-color)] group-hover:text-white duration-300 cursor-cartoon"
        >
          Подробнее
        </RouterLink>
      </div>
    </div>
  </section>
</template>
