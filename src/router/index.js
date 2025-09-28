import { createRouter, createWebHashHistory } from "vue-router";
import Bio from "../views/Bio.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Contact from "../views/Contact.vue";
import Slices from "../views/Slices.vue";

export const routes = [
  {
    path: "/",
    name: "Bio",
    component: Bio,
  },
  {
    path: "/Projects",
    name: "Other Projects",
    component: Projects,
  },
  {
    path: "/Skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Slices",
    name: "Slices",
    component: Slices,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;