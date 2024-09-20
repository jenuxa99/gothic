<template>
  <section class="py-20 w-3/4 m-auto">
    <div
      class="flex flex-col items-center gap-10 bg-[var(--r-color)] text-center py-16 px-5 rounded-2xl shadow-2xl"
    >
      <p
        class="font-sangha font-bold text-[var(--neon-color)] text-4xl uppercase text-shadow-neon"
      >
        страничк<span class="animate-neon">а</span> пока не офор<span
          class="animate-neon"
          >м</span
        >лена
      </p>
      <RouterLink
        to="/"
        class="bg-[var(--p-color)] rounded-2xl w-max px-2 py-4 border border-black font-lidren hover:text-[var(--r-color)] hover:bg-[var(--y-color)] active:text-white active:bg-red-900 duration-300"
        >Вернуться
      </RouterLink>
    </div>
  </section>
</template>
