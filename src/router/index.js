import { createRouter, createWebHistory } from "vue-router";
import DefaulLayout from "../Layouts/default.vue";
import DasboardLayout from "../Layouts/dasboard.vue";
import Login from "../views/Login.vue";
import Home from "../views/Index.vue";
import Admin from "../views/Admin/Index.vue";
import About from "../views/Admin/About.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: DefaulLayout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "login",
          name: "Login",
          component: Login,
        },
      ],
    },
    {
      path: "/admin",
      name: "dasboard",
      component: DasboardLayout,
      children: [
        {
          path: "",
          name: "Admin",
          component: Admin,
        },
        {
          path: "about",
          name: "About",
          component: About,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      beforeEnter: (to, from, next) => {
        next("/404");
      },
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  const isAuth = !!JSON.parse(localStorage.getItem("auth"));
  const isAdmin = to.path.includes("admin");
  const isLogin = to.path.includes("login");

  if (isAuth) {
    if (isLogin) next({ name: "Admin" });
    else next();
  } else {
    if (isAdmin) next({ name: "Login" });
    else next();
  }
});

export default router;
