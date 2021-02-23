import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/markdown",
    name: "markdown",
    component: () => import("@/components/markdown/index.vue"),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@/views/my/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
