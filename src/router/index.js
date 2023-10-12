import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import ProductView from "../views/ProductView/ProductView.vue"
import LoginView from "../views/LoginView/LoginView.vue"
import SingleProduct from "../views/SingleProduct/SingleProduct.vue"
import BrandView from "@/views/BrandView/BrandView.vue";

const Product ={
  template : '<div> SingleProduct {{id}} </div>',
  props : ['id']
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:query',
      alias :['/products/:query', '/products'],
      name: 'products',
      component: ProductView
    },
    {
      path: '/brand/:brandName',
      name: 'brand',
      component: BrandView
    },
    {
      path: '/product/:productSlug',
      name: 'Single Product',
      component: SingleProduct,
      // props : {true} 
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: LoginView
    // },
    ...['/login','/register'].map(path=>({
      path,
      component:  LoginView
    }))
  ],
  scrollBehavior (to, from, savedPosition){
    return { top: 0 }
  }
})

export default router
