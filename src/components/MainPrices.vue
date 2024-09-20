<script setup>
const props = defineProps({ handleClick: Function });
</script>

<template>
  <section class="py-20 px-6">
    <p
      class="font-semibold text-[26px] text-center pb-10 text-[var(--r-color)]"
    >
      Наши цены
    </p>
    <div class="flex flex-col xl:flex-row xl:justify-center items-center gap-5">
      <div
        class="flex flex-col gap-10 items-center border border-gray-100 rounded-2xl shadow-lg xl:shadow-2xl w-3/5 xl:w-1/4 py-10 px-16"
      >
        <p class="font-normal text-[24px] leading-[29px]">Просто</p>
        <p class="font-semibold text-[26px] leading-[31px]">
          от <span class="text-[var(--r-color)]">900 ₽</span> за м<sup>2</sup>
        </p>
        <p
          class="text-center font-normal text-[14px] leading-[20px] text-[#787878]"
        >
          Геометрия, линии и роспись по скотчу
        </p>
        <RouterLink to="/inDevelop"
          class="bg-white text-[var(--r-color)] rounded-md py-2 px-5 cursor-cartoon border border-[var(--r-color)] hover:text-white hover:bg-[var(--r-color)] duration-300"
        >
          ЗАКАЗАТЬ
        </RouterLink>
      </div>
      <div
        class="flex flex-col gap-10 items-center border border-gray-100 rounded-2xl shadow-lg xl:shadow-2xl w-3/5 xl:w-1/4 py-10 px-16"
      >
        <p class="font-normal text-[24px] leading-[29px]">Детально</p>
        <p class="font-semibold text-[26px] leading-[31px]">
          от <span class="text-[var(--r-color)]">2000 ₽</span> за м<sup>2</sup>
        </p>
        <p
          class="text-center font-normal text-[14px] leading-[20px] text-[#787878]"
        >
          Более детальные прорисовки и от двух художников
        </p>
        <RouterLink to="/inDevelop"
          class="bg-white text-[var(--r-color)] rounded-md py-2 px-5 cursor-cartoon border border-[var(--r-color)] hover:text-white hover:bg-[var(--r-color)] duration-300"
        >
          ЗАКАЗАТЬ
        </RouterLink>
      </div>
      <div
        class="flex flex-col gap-10 items-center border border-gray-100 rounded-2xl shadow-lg xl:shadow-2xl w-3/5 xl:w-1/4 py-10 px-16"
      >
        <p class="font-normal text-[24px] leading-[29px]">Идеально</p>
        <p class="font-semibold text-[26px] leading-[31px]">
          от <span class="text-[var(--r-color)]">2500 ₽</span> за м<sup>2</sup>
        </p>
        <p
          class="text-center font-normal text-[14px] leading-[20px] text-[#787878]"
        >
          Профессиональные рисунки с тенями и деталямиу
        </p>
        <RouterLink to="/inDevelop"
          class="bg-white text-[var(--r-color)] rounded-md py-2 px-5 cursor-cartoon border border-[var(--r-color)] hover:text-white hover:bg-[var(--r-color)] duration-300"
        >
          ЗАКАЗАТЬ
        </RouterLink>
      </div>
    </div>
    <p
      class="font-normal text-[12px] leading-[21px] text-[#787878] font-montserrat text-justify w-5/6 m-auto py-10"
    >
      Стоимость художественной росписи стен в Санкт-Петербурге рассчитывается
      индивидуально. На цену влияет размер рисунка, сложность, особенности
      поверхности и вид материалов. При заказе большого объема мы делаем скидки.
      Если у вас ограниченный бюджет, мы подстраиваемся и подбираем несложные
      рисунки. Стоимость материалов всегда оплачивается отдельно. Также отдельно
      оплачивается эскиз. Закажите роспись стен в спб у нас на сайте.
    </p>
    <div class="flex flex-col items-center gap-5 pt-10">
      <p class="font-semibold text-[20px] font-inter text-[var(--r-color)]">Заказать роспись стен</p>
      <span class="font-normal text-[13px] font-montserrat"
        >*согласие на обработку
        <a class="text-[var(--r-color)] cursor-cartoon font-montserrat" href="#"
          >персональных данных</a
        ></span
      >
      <button
        @click="handleClick()"
        class="bg-[var(--r-color)] font-inter text-[var(--neon-color)] text-2xl mt-5 rounded-2xl w-60 h-20 cursor-cartoon animate-pulsateFwd duration-300"
      >
        ЗАКАЗАТЬ
      </button>
    </div>
  </section>
</template>
