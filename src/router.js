import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import NotReadyYet from "./pages/NotReadyYet.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/inDevelop", component: NotReadyYet },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
