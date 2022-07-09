import Vue from 'vue'

import VueRouter from 'vue-router'

import MyHome from '@/views/MyHome.vue'
import MyClass from '@/views/MyClass.vue'
import MyOrder from '@/views/MyOrder.vue'
import MyInfo from '@/views/MyInfo.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: MyHome,
  },
  {
    path: '/class',
    component: MyClass,
  },
  {
    path: '/order',
    component: MyOrder,
  },
  {
    path: '/info',
    component: MyInfo,
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

export default router
