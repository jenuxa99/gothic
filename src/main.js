import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router.js";
import App from "./App.vue";

import "./style.css";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
