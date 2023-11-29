import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.scss";
import { createRouter, createWebHistory } from "vue-router";
import Cabinet from "./pages/Cabinet.vue";
import Formulaire from "./pages/Formulaire.vue";
import Home from "./pages/Home.vue";
import PortailPatient from "./pages/PortailPatient.vue";
import PortailOrtho from "./pages/PortailOrtho.vue";
import Connexion from "./pages/Connexion.vue";
import Mentions from "./pages/Mentions.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
        path: "/espaceconnexion",
        name: "Connexion",
        component: Connexion,
      },
      {
        path: "/portailortho",
        name: "PortailOrtho",
        component: PortailOrtho,
      },
      {
        path: "/mentionslegales",
        name: "Mentions",
        component: Mentions,
      },
    {
      path: "/demanderdv",
      name: "Formulaire",
      component: Formulaire,
    },
    {
      path: "/portailpatient",
      name: "PortailPatient",
      component: PortailPatient,
    },
    {
      path: "/cabinet",
      name: "Cabinet",
      component: Cabinet,
    },
  ],
});

const app = createApp(App);
app.use(router).mount("#app");
const mountedApp = app.mount("App");
