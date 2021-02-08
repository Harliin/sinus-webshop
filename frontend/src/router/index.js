import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import OrderDone from '../views/OrderDone.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/orderdone',
    component: OrderDone
  },
  {
    path: '/register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
