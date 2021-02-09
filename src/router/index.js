import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "个人介绍",
      icon: "UserOutlined",
    },
  },
  {
    path: "/markdown",
    name: "markdown",
    component: () => import("@/components/markdown/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
