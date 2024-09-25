<script setup>
import MainPricesItem from "./MainPricesItem.vue";
const props = defineProps({ handleClick: Function });

const priceItem = [
  {
    level: "Просто",
    price: 900,
    title: "Подходит для небольших и простых пространств",
    conditions: ["Геометрия и линии", "Роспись по скотчу", "Простые узоры"],
  },
  {
    level: "Детально",
    price: 2000,
    title: "Идеально для акцентных и стильных интерьеров",
    conditions: [
      "Сложные узоры",
      "Детализация от двух художников",
      "Тщательная проработка",
    ],
  },
  {
    level: "Идеально",
    price: 2500,
    title: "Подходит для крупных помещений с вниманием к деталям",
    conditions: [
      "Профессиональные рисунки",
      "Тени и детали",
      "Художественная проработка",
    ],
  },
];
</script>

<template>
  <section
    class="flex flex-col items-center py-20 px-2 xl:px-10 gap-5 font-montserrat bg-[var(--r-color)] rounded-3xl"
  >
    <p
      class="font-semibold text-2xl mb-10 md:text-3xl text-[var(--p-color)] font-lidren"
    >
      Наши цены
    </p>
    <main-prices-item :content="priceItem" />
    <div class="flex flex-col items-center gap-1 pt-10">
      <p
        class="font-light font-montserrat text-lg text-white xl:text-justify leading-5 w-5/6 m-auto py-10"
      >
        Стоимость художественной росписи стен в Санкт-Петербурге рассчитывается
        индивидуально. На цену влияет размер рисунка, сложность, особенности
        поверхности и вид материалов. При заказе большого объема мы делаем
        скидки. Если у вас ограниченный бюджет, мы подстраиваемся и подбираем
        несложные рисунки. Стоимость материалов всегда оплачивается отдельно.
        Также отдельно оплачивается эскиз. Закажите роспись стен в спб у нас на
        сайте.
      </p>
      <p class="font-semibold text-[20px] font-inter text-[var(--p-color)]">
        Заказать роспись стен
      </p>
      <p class="font-normal text-[13px] text-[var(--p-color)] cursor-cartoon font-montserrat">
        *согласие на обработку
        <a class="" href="#"
          >персональных данных</a
        >
      </p>
      <button
        @click="handleClick"
        class="bg-[var(--p-color)] font-montserrat text-[var(--text-color)] text-2xl mt-5 rounded-2xl w-60 h-20 cursor-cartoon animate-pulsateFwd duration-300"
      >
        ЗАКАЗАТЬ
      </button>
    </div>
  </section>
</template>