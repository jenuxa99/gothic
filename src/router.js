import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./pages/Home.vue") },
  { path: "/inDevelop", component: () => import("./pages/NotReadyYet.vue") },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
