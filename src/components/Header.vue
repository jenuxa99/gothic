<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { dataStorage } from "../store/data.js";

const store = dataStorage();

// Логика меню навигации
const isMenuOpen = ref(false);

const handleNavbarToggle = (selectedId) => {
  store.navbarItems.forEach((item) => {
    item.id !== selectedId
      ? (item.checked = false)
      : (item.checked = !item.checked);
  });
};

// Логика шапки
const headerStyle = ref("");

const handleScroll = () => {
  window.scrollY < 100
    ? (headerStyle.value = "bg-[var(--p-color)]")
    : (headerStyle.value = "bg-transparent backdrop-blur-xl");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="relative bg-[var(--p-color)] z-50 border border-black duration-1000"
    :class="headerStyle"
  >
    <!-- HEADER @min-width > 1280 -->
    <section
      class="flex justify-center max-[450px]:justify-start xl:justify-between items-center px-7 py-3"
    >
      <RouterLink
        class="text-4xl text-[var(--text-color)] cursor-cartoon font-sangha select-none"
        to="/"
        >gothic</RouterLink
      >
      <!-- Левая сторона -->
      <aside class="flex gap-3 items-center font-montserrat">
        <div
          v-for="(item, index) in store.navbarItems"
          :key="index"
          :for="item.id"
          class="relative cursor-cartoon select-none"
          :id="item.id"
          @click="() => handleNavbarToggle(item.id)"
        >
          <!-- Основная навигация -->
          <nav
            class="group hidden xl:flex gap-1 items-center p-2 rounded-lg border border-transparent hover:border-black hover:bg-[var(--r-color)] hover:text-white duration-300"
          >
            <p class="group-hover:text-white">
              {{ item.label }}
            </p>
            <svg
              :class="{
                'rotate-90 duration-300 transition-transform': !item.checked,
                'rotate-0 duration-300 transition-transform': item.checked,
              }"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              class="group-hover:fill-white"
            >
              <path
                d="M5 4.31846L8.34377 1.03539C8.64653 0.73813 9.1316 0.738131 9.43436 1.03539C9.74506 1.34046 9.74506 1.84108 9.43436 2.14614L5.3503 6.15606C5.15581 6.34702 4.84419 6.34702 4.6497 6.15606L0.565644 2.14614C0.254938 1.84108 0.254937 1.34046 0.565644 1.03539C0.868403 0.73813 1.35347 0.738131 1.65623 1.03539L5 4.31846Z"
              />
            </svg>
          </nav>

          <!-- DropDownMenu -->
          <transition name="slide-fade">
            <nav
              v-if="item.checked"
              class="absolute left-0 top-full flex flex-col mt-2 backdrop-blur-xl border border-black shadow-xl rounded-lg z-20 w-max"
            >
              <RouterLink
                to="/inDevelop"
                v-for="(item, itemIndex) in item.menuItems"
                :key="itemIndex"
                class="py-2 hover:bg-[var(--r-color)] hover:text-white px-4 rounded-lg transition border border-transparent hover:border-black"
              >
                {{ item }}
              </RouterLink>
            </nav>
          </transition>
        </div>
      </aside>

      <!-- Правая сторона -->
      <aside class="flex items-center z-10">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
          ><img
            class="h-12 cursor-cartoon"
            src="/icons/draw-y.png"
            alt="youtube icon"
        /></a>
        <p
          class="text-white bg-[var(--r-color)] border border-black py-px px-2 rounded-md text-[18px] font-inter font-light ml-2 xl:order-2 max-md:hidden"
        >
          8 (952) 155-26-37
        </p>
        <a href="https://vk.com/wall-1959_7709426" target="_blank"
          ><img
            class="h-12 cursor-cartoon"
            src="/icons/draw-vk.png"
            alt="vk icon"
        /></a>
      </aside>
    </section>

    <!-- BURGER-MENU @min-width < 1280 -->
    <section>
      <!-- Burger-menu button -->
      <label
        @click="isMenuOpen = !isMenuOpen"
        class="absolute xl:hidden right-10 top-[calc(50%-25%)]"
      >
        <div
          class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
        >
          <div
            :class="{
              'rotate-[-45deg]': isMenuOpen,
              'rotate-0': !isMenuOpen,
            }"
            class="w-1/2 h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem]"
          ></div>
          <div
            :class="{
              hidden: isMenuOpen,
              block: !isMenuOpen,
            }"
            class="w-1/2 h-[2px] bg-black rounded-md transition-all duration-300 origin-center"
          ></div>
          <div
            :class="{
              'rotate-[45deg]': isMenuOpen,
              'rotate-0': !isMenuOpen,
            }"
            class="w-1/2 h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem]"
          ></div>
        </div>
      </label>
      <!-- Burger menu -->
      <transition name="burger-menu">
        <div
          v-if="isMenuOpen"
          :class="headerStyle"
          class="absolute right-0 flex flex-col items-start gap-6 py-4 px-6 bg-[var(--p-color)] border border-black rounded-l-xl shadow-2xl duration-1000"
        >
          <div v-for="item in store.navbarItems" :key="item.id">
            <RouterLink
              to="/inDevelop"
              class="flex items-center gap-3 font-montserrat text-xl text-[var(--text-color)] active:font-extrabold select-none border border-transparent border-b-black"
              @click="
                item.checked = false;
                isMenuOpen = false;
              "
            >
              <img class="h-10" :src="item.imgURL" /> {{ item.label }}
            </RouterLink>
          </div>
          <ul class="flex gap-px justify-around">
            <li class="cursor-cartoon">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                ><img class="h-14" src="/icons/draw-y.png" alt=""
              /></a>
            </li>
            <li class="cursor-cartoon">
              <a href="https://vk.com/wall-1959_7709426" target="_blank"
                ><img class="h-14" src="/icons/draw-vk.png" alt=""
              /></a>
            </li>
            <li class="cursor-cartoon">
              <a
                href="https://www.facebook.com/RickAstley/?locale=ru_RU"
                target="_blank"
                ><img class="h-14" src="/icons/draw-f.png" alt=""
              /></a>
            </li>
          </ul>
        </div>
      </transition>
    </section>
  </header>
</template>

<style scoped>
.burger-menu-enter-active,
.burger-menu-leave-active {
  transition: all 1s ease;
}
.burger-menu-enter-from {
  transform: translateX(100%);
}
.burger-menu-leave-to {
  transform: translateX(100%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
