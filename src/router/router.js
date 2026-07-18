import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/home.vue';
import AssemblyModel from '../pages/assembly-model/assembly-model.vue';
import Contact from '../pages/contact/contact.vue';
import listProducts from "../pages/home/components/lits-products.vue";
import mainAssemblyModel from '../pages/assembly-model/main-assembly-model.vue';
import otherCategories from '../pages/other-categories/other-categories.vue';
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
      component: listProducts
    },
    {
        path: '/assembly-model',
        name: 'assembly-model',
        component: mainAssemblyModel
    },
    {
        path: '/contact',
        name: '/contact',
        component: Contact
    },
       {
        path: '/product',
        name: '/product',
        component: otherCategories
    }
    // ... các route khác nếu có
  ]
})

export default router