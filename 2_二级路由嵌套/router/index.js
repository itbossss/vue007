import Vue from 'vue'

import VueRouter from 'vue-router'

import MyHome from '@/views/MyHome.vue'
import MyNews from '@/views/MyNews.vue'
import MySports from '@/views/MySports.vue'
import MySports1 from '@/views/MySports1.vue'
import MySports2 from '@/views/MySports2.vue'
import MySports3 from '@/views/MySports3.vue'

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
    path: '/news',
    component: MyNews,
  },
  {
    path: '/sports',
    component: MySports,
    children: [
      {
        path: 'sports1',
        component: MySports1,
      },
      {
        path: 'sports2',
        component: MySports2,
      },
      {
        path: 'sports3',
        component: MySports3,
      },
    ],
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

export default router
