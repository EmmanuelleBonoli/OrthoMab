import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.scss";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Cabinet from "./pages/Cabinet.vue";
import Formulaire from "./pages/Formulaire.vue";
import PortailPatient from "./pages/PortailPatient.vue";
import PortailOrtho from "./pages/PortailOrtho.vue";
import Mentions from "./pages/Mentions.vue";
import RdvPatient from "./components/RdvPatient.vue";
import ComptesRendusPatient from "./components/ComptesRendusPatient.vue";
import MessageriePatient from "./components/MessageriePatient.vue";
import ComptesRendusOrtho from "./components/ComptesRendusOrtho.vue";
import ListeAttente from "./components/ListeAttente.vue";
import Patientele from "./components/Patientele.vue";
import Planning from "./components/Planning.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
   
      {
        path: "/portailortho",
        name: "PortailOrtho",
        component: PortailOrtho,
        children:[
          {
            path: "/mapatientele",
        name: "Patientele",
        component: Patientele,
          },
          {
            path: "/monplanning",
        name: "Planning",
        component: Planning,
          },
          {
            path: "/mescomptesrendusortho",
        name: "ComptesRendusOrtho",
        component: ComptesRendusOrtho,
          },
          {
            path: "/malistedattente",
        name: "ListeAttente",
        component: ListeAttente,
          },
        ]
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
      children:[
        {
          path: "/mesrdv",
      name: "RdvPatient",
      component: RdvPatient,
        },
        {
          path: "/mescomptesrendus",
      name: "ComptesRendusPatient",
      component: ComptesRendusPatient,
        },
        {
          path: "/messageriepatient",
      name: "MessageriePatient",
      component: MessageriePatient,
        },
      ]
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
