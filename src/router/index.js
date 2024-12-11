import { createRouter, createWebHistory } from 'vue-router';

// Importar os componentes que serão usados nas rotas


import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';

import DashboardView from '../views/DashboardView.vue';

// Definir as rotas do seu aplicativo
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
];

// Criar o roteador com o histórico do navegador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
