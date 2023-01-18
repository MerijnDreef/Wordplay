import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LeaderboardView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/easy",
      name: "easy",
      component: () => import("../views/EasyView.vue"),
    },
    {
      path: "/difficult",
      name: "difficult",
      component: () => import("../views/DifficultView.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!sessionStorage.getItem('isAuthLogin') && to.name !== 'login') {
      return { name: 'login' }
  } else if (sessionStorage.getItem('isAuthLogin') && to.name === 'login') {
    return { name: '/' }
  }
})

export default router;
