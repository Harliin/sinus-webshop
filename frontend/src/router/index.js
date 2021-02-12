import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import VisitorCart from '../views/VisitorCart.vue'
import OrderDone from '../views/OrderDone.vue'
import UserAccount from '../views/UserAccount.vue'


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
  {
    path: '/visitorCart',
    component: VisitorCart
  },
  {
    path: '/myaccount',
    component: UserAccount
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
