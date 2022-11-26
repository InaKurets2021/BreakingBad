import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";
import PersonPage from "../pages/PersonPage";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogPage,
  },
  {
    path: "/person/:id",
    name: "person",
    component: PersonPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
