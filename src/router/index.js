import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Rahbariyat from '../views/Rahbariyat.vue';
import Oqituvchilar from '../views/Oqituvchilar.vue';
import yangiliklar from '../views/newsView.vue';
import Oquv_jarayoni from '../views/Oquv_jarayoni.vue';
import Olimpiada from '../views/Olimpiada.vue';
import Boglanish from '../views/boglanish.vue';
import Login from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rahbariyat',
      name: 'RahbariyatVue',
      component: Rahbariyat
    },
    {
      path: '/teacher',
      name: 'TeacherVue',
      component: Oqituvchilar
    },
    {
      path: '/news',
      name: 'NewsVue',
      component: yangiliklar
    },
    {
      path: '/oquv',
      name: 'OquvJarayoni',
      component: Oquv_jarayoni
    },
    {
      path: '/olimpiada',
      name: 'Olimpiada',
      component: Olimpiada
    },
    {
      path: '/boglanish',
      name: 'Boglanish',
      component: Boglanish
    },
    {
      path: '/login',
      name: 'LoginOynasi',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
