import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../pages/MainPage';
import CatalogPage from '../pages/CatalogPage';
import PersonaPage from '../pages/PersonaPage';

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
