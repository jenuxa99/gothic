<template>
  <section class="flex flex-col items-center justify-center m-auto py-20 px-6">
    <p class="font-semibold text-[26px] text-center pb-10 text-[var(--r-color)]">Наши работы</p>
    <div
      class="flex flex-col xl:grid xl:grid-flow-col-dense xl:grid-cols-[295px_400px_190px_295px] xl:grid-rows-[154px_147px_230px] gap-2 xl:gap-5 m-auto"
    >
      <div
        class="row-span-4 xl:row-span-3 xl:col-span-1 bg-[var(--r-color)] rounded-xl overflow-hidden shadow-2xl"
      >
        <img class="w-full h-full" src="/arts/works-ny-graph-1.png" alt="" />
      </div>
      <div class="xl:row-span-1 xl:col-span-1 bg-[var(--r-color)] rounded-xl overflow-hidden shadow-2xl">
        <img class="w-full h-auto" src="/arts/works-room-wall-1.png" alt="" />
      </div>
      <div
        class="xl:col-span-1 xl:row-span-2 bg-[var(--r-color)] rounded-xl overflow-hidden shadow-2xl"
      >
        <img class="w-full h-full" src="/arts/works-loft.png" alt="" />
      </div>
      <div
        class="hidden xl:row-span-1 xl:col-span-1 bg-[var(--r-color)] rounded-xl overflow-hidden shadow-2xl xl:flex justify-center items-center cursor-cartoon"
      >
        <RouterLink to="/inDevelop"
          class="text-white font-normal text-lg text-center leading-[30px] font-montserrat"
        >
          Посмотреть портфолио
        </RouterLink>
      </div>
      <div
        class="xl:col-span-1 xl:row-span-2 bg-[var(--r-color)] rounded-xl overflow-hidden shadow-2xl"
      >
        <img class="w-auto h-full" src="/arts/works-wall.png" alt="" />
      </div>
      <div
        class="xl:row-span-2 xl:col-span-1 bg-[var(--r-color)] rounded-xl overflow-hidden shadow-2xl"
      >
        <img class="w-auto h-full" src="/arts/works-kido.png" alt="" />
      </div>
      <div class="xl:row-span-1 xl:col-span-1 bg-[var(--r-color)] rounded-xl overflow-hidden shadow-2xl">
        <img class="w-full h-full" src="/arts/works-jesus.png" alt="" />
      </div>
    </div>
  </section>
</template>
