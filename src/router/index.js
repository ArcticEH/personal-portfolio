import { createRouter, createWebHistory } from "vue-router";
import Bio from "../views/Bio.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Bio",
    component: Bio,
  },
  {
    path: "/Projects",
    name: "Projects",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
