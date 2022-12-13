import { createRouter, createWebHistory } from "vue-router";
import DefaulLayout from "../Layouts/default.vue";
import DashoboardLayout from "../Layouts/dasboard.vue";
import LandingLayout from "../Layouts/landing.vue";
import Login from "../views/login.vue";
import NotFound from "../views/notfound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaulLayout,
      children: [
        {
          path: "",
          component: () => import("../views/index.vue"),
          beforeEnter: () => {
            return "/web";
          },
          meta: { auth: false },
        },
        {
          path: "login",
          name: "Login",
          component: Login,
          meta: { auth: false },
        },
      ],
    },
    {
      path: "/admin",
      component: DashoboardLayout,
      children: [
        {
          path: "",
          name: "Dashoboard",
          component: () => import("../views/admin/index.vue"),
          meta: { auth: false },
        },
      ],
    },
    {
      path: "/web",
      component: LandingLayout,
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../views/web/index.vue"),
          meta: { auth: false },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not found",
      component: NotFound,
      meta: { auth: false },
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  // const isAuth = to.meta.auth;
  // const token = !!JSON.parse(localStorage.getItem("token"));
  // const isAdmin = to.path.includes("admin");
  // const isLogin = to.path.includes("login");

  // if (token) next();
  // else if (!token) next({ name: "Login" });
  // else next();

  next();

  // if (isAuth) {
  //   if (isLogin) {
  //     alert("Access diterima");
  //     next({ name: "Admin" });
  //   } else next();
  // } else {
  //   if (isAdmin) {
  //     alert("Access ditolak, silahkan login terlebih dahulu");
  //     next({ name: "Login" });
  //   } else next();
  // }
});

router.afterEach((to) => {
  document.title = `${to.name || "Vue 3"} - Toktok`;
});

export default router;
