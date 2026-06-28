import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/home.vue';
import Accessory from '../pages/accessory/accessory.vue';
import AssemblyModel from '../pages/assembly-model/assembly-model.vue';
import Contact from '../pages/contact/contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      // Lazy-load file product.vue của bạn tại đây
      component: Accessory
    },
    {
        path: '/assembly-model',
        name: 'assembly-model',
        component: AssemblyModel
    },
    {
        path: '/contact',
        name: '/contact',
        component: Contact
    }
    // ... các route khác nếu có
  ]
})

export default router