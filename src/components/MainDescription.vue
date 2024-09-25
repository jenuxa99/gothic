<script setup>
import MainDescriptionExample from "./MainDescriptionExample.vue";
</script>

<template>
  <section class="flex flex-col items-center py-20 px-6 gap-10 font-montserrat">
    <p
      class="font-semibold text-2xl md:text-3xl text-[var(--r-color)] font-lidren"
    >
      Мы - команда
    </p>
    <p class="font-normal text-sm lg:text-lg leading-6 text-justify">
      Наши проекты и достижения привлекли внимание крупнейших медиа-изданий и
      платформ. О нас написали такие известные ресурсы, как "Деловой Петербург",
      "Невские Новости", "Авито Подкаст", "Подкаст Либо-Либо", vc.ru, а также
      многие другие. Мы активно развиваемся в различных направлениях: запустили
      свою собственную школу росписи стен, где обучаем новых художников и
      профессионалов, запустили франшизу, которая помогает расширить наш бизнес
      и распространить нашу методику по всей стране. Более того, мы официально
      зарегистрировали свой товарный знак, что подчёркивает наше стремление к
      качеству и уникальности в сфере искусства.
    </p>

    <div
      class="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 lg:grid-cols-12 xl:grid-rows-2 gap-4 text-center w-full font-semibold text-[20px]"
    >
      <main-description-example
        title="<p class='text-white'>Наши успехи</p>"
        customClass="max-md:col-span-2 lg:col-span-2 bg-[var(--r-color)] "
      />
      <main-description-example
        title='<p>За<span class="text-[var(--r-color)] font-lidren"> 2023 </span>год в
        Санкт-Петербурге</p>'
        customClass="col-span-2 lg:col-span-4"
      />
      <main-description-example
        title='<p><span class="text-[var(--r-color)] font-lidren"> 52 </span> пекарни</p>'
        customClass="lg:col-span-2"
      />
      <main-description-example
        title='<p><span class="text-[var(--r-color)] font-lidren"> 14 </span> оффисов</p>'
        customClass="lg:col-span-2"
      />
      <main-description-example
        title='<p><span class="text-[var(--r-color)] font-lidren"> 12 </span> квартир</p>'
        customClass="lg:col-span-2"
      />
      <main-description-example
        title='<p><span class="text-[var(--r-color)] font-lidren"> 10 </span> детских</p>'
        customClass="lg:col-span-2"
      />
      <main-description-example
        title='<p><span class="text-[var(--r-color)] font-lidren"> 7 </span> салонов красоты</p>'
        customClass="max-[365px]:col-span-2 md:col-span-2 lg:col-span-3"
      />
      <main-description-example
        title='<p><span class="text-[var(--r-color)] font-lidren"> 3 </span> школы</p>'
        customClass="lg:col-span-2"
      />
      <main-description-example
        title='<p><span class="text-[var(--r-color)] font-lidren"> 2 </span> кофейни</p>'
        customClass="lg:col-span-2"
      />
      <main-description-example
        title='<p><span class="text-[var(--r-color)] font-lidren"> 1 </span> отель</p>'
        customClass="max-[365px]:col-span-2 lg:col-span-3"
      />
    </div>
  </section>
</template>
