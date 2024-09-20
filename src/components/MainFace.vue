<script setup>
const props = defineProps({ handleClick: Function });
</script>

<template>
  <section
    class="flex flex-col xl:flex-row overflow-hidden rounded-3xl xl:rounded-3xl mt-10 xl:m-10 shadow-2xl border border-gray-300"
  >
    <div
      class="order-2 xl:order-1 flex flex-col gap-5 p-10 bg-[var(--p-color)] xl:w-3/5 pb-20"
    >
      <p
        class="font-semibold font-inter text-[54px] leading-[53px] text-[var(--r-color)]"
      >
        Роспись стен в<br />Санкт-Петербурге
      </p>
      <p class="font-montserrat text-[18px] leading-[25px] w-full">
        Закажите уникальную роспись стен в Санкт-Петербурге от художественной
        студии "Готик" и превратите любое помещение в произведение искусства. Мы
        используем авторскую технику росписи, которая придаст вашему интерьеру
        неповторимый характер и стиль. Специализируемся на оформлении квартир,
        детских комнат, офисных помещений и других пространств. Работаем быстро
        и качественно — от одного дня, в зависимости от объема. В рамках услуги
        мы создаем оригинальные эскизы, самостоятельно закупаем все необходимые
        материалы, а по завершению оставляем рабочую зону в полном порядке и
        чистоте. Вам остаётся лишь сделать один шаг — позвоните нам, и мы
        воплотим ваши идеи в реальность!
      </p>
      <button
        @click="handleClick()"
        class="bg-[var(--r-color)] font-inter text-[var(--neon-color)] ml-auto xl:ml-0 text-2xl mt-5 rounded-2xl w-60 h-20 cursor-cartoon animate-pulsateFwd duration-300"
      >
        ЗАКАЗАТЬ
      </button>
    </div>
    <div class="order-1 xl:order-2 xl:w-2/5 bg-red-100 overflow-hidden">
      <img
        class="animate-scaleCycle h-full w-auto object-cover"
        src="/artists/artist-9.png"
        alt=""
      />
    </div>
  </section>
</template>
