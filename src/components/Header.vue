<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  checkboxes: Array,
});

const handleCheckboxChange = (selectedId) => {
  props.checkboxes.forEach((checkbox) => {
    if (checkbox.id !== selectedId) {
      checkbox.checked = false;
    }
  });
};

const resetCheckboxesAndCloseMenu = () => {
  props.checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  isMenuOpen.value = false;
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header
    class="relative rounded-b-2xl xl:rounded-2xl z-20 bg-[var(--p-color)]"
  >
    <section class="flex justify-between items-center px-10 py-3">
      <nav class="flex gap-px xl:gap-14 items-center z-0 font-montserrat">
        <RouterLink
          class="text-[40px] text-[var(--r-color)] cursor-cartoon font-sangha select-none"
          to="/"
          >gothic</RouterLink
        >
        <section class="flex gap-6 select-none">
          <input
            v-for="(checkbox, index) in checkboxes"
            :key="index"
            type="checkbox"
            :id="checkbox.id"
            v-model="checkbox.checked"
            @change="() => handleCheckboxChange(checkbox.id)"
            class="hidden"
          />
          <label
            v-for="(checkbox, index) in checkboxes"
            :key="index"
            :for="checkbox.id"
            class="cursor-cartoon relative flex items-center"
          >
            <div
              class="group hidden xl:flex gap-2 items-center p-2 rounded-lg hover:bg-[var(--r-color)] hover:text-white hover:border hover:border-gray-400 duration-300"
            >
              <p class="group-hover:text-white">
                {{ checkbox.label }}
              </p>
              <svg
                :class="{
                  'rotate-90 duration-300 transition-transform':
                    !checkbox.checked,
                  'rotate-0 duration-300 transition-transform':
                    checkbox.checked,
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
            </div>
            <transition name="slide-fade">
              <nav
                v-if="checkbox.checked"
                class="absolute left-0 top-full flex flex-col mt-2 bg-[var(--p-color)] border border-gray-400 shadow-xl rounded-lg z-20 w-max"
              >
                <RouterLink
                  to="/inDevelop"
                  v-for="(item, itemIndex) in checkbox.menuItems"
                  :key="itemIndex"
                  @click="resetCheckboxesAndCloseMenu"
                  class="py-2 hover:bg-[var(--r-color)] hover:text-white px-4 rounded-lg transition"
                >
                  {{ item }}
                </RouterLink>
              </nav>
            </transition>
          </label>
        </section>
      </nav>
      <nav class="hidden xl:flex items-center gap-4 xl:gap-10 z-10">
        <ul class="flex gap-px xl:gap-2">
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
        </ul>
        <p class="text-[var(--r-color)] font-semibold text-[18px] font-inter">
          8 (952) 155-26-37
        </p>
      </nav>
    </section>
    <label @click="toggleMenu">
      <div
        class="absolute right-0 top-[calc(50%-25%)] w-9 h-10 cursor-pointer flex flex-col items-center justify-center xl:hidden mr-10"
      >
        <div
          :class="{
            'rotate-[-45deg]': isMenuOpen,
            'rotate-0': !isMenuOpen,
          }"
          class="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem]"
        ></div>
        <div
          :class="{
            hidden: isMenuOpen,
            block: !isMenuOpen,
          }"
          class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center"
        ></div>
        <div
          :class="{
            'rotate-[45deg]': isMenuOpen,
            'rotate-0': !isMenuOpen,
          }"
          class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem]"
        ></div>
      </div>
    </label>
    <transition name="burger-menu">
      <div
        v-if="isMenuOpen"
        class="absolute flex flex-col gap-6 py-4 px-6 w-1/2 right-0 z-50 bg-[var(--p-color)] rounded-l-xl border border-gray-500 shadow-2xl"
      >
        <div v-for="checkbox in checkboxes" :key="checkbox.id">
          <RouterLink
            to="/inDevelop"
            class="font-inter text-3xl text-[var(--r-color)] active:font-extrabold select-none"
            @click="resetCheckboxesAndCloseMenu"
          >
            {{ checkbox.label }}
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
