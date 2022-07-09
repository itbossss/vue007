import Vue from 'vue'

import VueRouter from 'vue-router'

import UI_Router from '@/views/UI_Router.vue'
import Contacts from '@/views/Contacts.vue'
import About from '@/views/About.vue'

import Allcontacts from '../components/All_contacts.vue'
import Alice from '../components/Alice.vue'
import Bob from '../components/Bob.vue'
import Blog from '../components/Blog.vue'
import fax from '../components/fax.vue'

const routes = [
  {
    path: '/',
    redirect: '/router',
  },
  {
    path: '/router',
    component: UI_Router,
  },
  {
    path: '/contacts',
    component: Contacts,
    children: [
      { path: 'allcontacts', component: Allcontacts },
      { path: 'alice', component: Alice },
      {
        path: 'bob',
        component: Bob,
        children: [
          { path: 'blog', component: Blog },
          { path: 'fax', component: fax },
        ],
      },
    ],
  },
  {
    path: '/about',
    component: About,
  },
]

Vue.use(VueRouter)

let routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  routes,
})

export default router
