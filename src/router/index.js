import { createRouter, createWebHistory } from "vue-router";
import DefaulLayout from "../Layouts/default.vue";
import DasboardLayout from "../Layouts/dasboard.vue";
import Login from "../views/Login.vue";
import Home from "../views/Index.vue";
import Admin from "../views/admin/Index.vue";
import About from "../views/admin/About.vue";
import NotFound from "../views/NotFound.vue";
import PokemonList from "../views/admin/pokemon/index.vue";
import DetailPokemon from "../views/admin/pokemon/detail.vue";

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
        {
          path: "/404",
          name: "NotFound",
          component: NotFound,
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
          path: "pokemon-list",
          name: "PokemonList",
          component: PokemonList,
        },
        {
          path: "pokemon/:detail",
          name: "Detail",
          component: DetailPokemon,
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
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  const isAuth = !!JSON.parse(localStorage.getItem("auth"));
  const isAdmin = to.path.includes("admin");
  const isLogin = to.path.includes("login");

  if (isAuth) {
    if (isLogin) {
      alert("Access diterima");
      next({ name: "Admin" });
    } else next();
  } else {
    if (isAdmin) {
      alert("Access ditolak, silahkan login terlebih dahulu");
      next({ name: "Login" });
    } else next();
  }
});

router.afterEach((to, from) => {
  document.title = `${to.name || "Boilerplate"} || VuePinia`;
});

export default router;
