import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage';
import CatalogPage from '../pages/CatalogPage';
import PersonaPage from '../pages/PersonaPage';
import NotFoundPage from '../pages/NotFoundPage';

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogPage,
  },
  {
    path: '/persona/:id',
    name: 'persona',
    component: PersonaPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
