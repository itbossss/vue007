import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import UlRouter from './views/Ul_Router.vue'
import Contacts from './views/Contacts.vue'
import About from './views/About.vue'

import AllContacts from './views/Second/All_contacts.vue'
import Bob from './views/Second/Bob.vue'
import Alice from './views/Second/Alice.vue'

import Fax from './views/Second/Third/fax.vue'
import Blog from './views/Second/Third/blog.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

Vue.directive('clickOn', {
  inserted(el) {
    el.click();
  }
})

//创建路由规则数组
const routes = [
  {
    path: '/Contacts',
    component: Contacts,
    children: [
      {
        path: 'Bob',
        component: Bob,
        children: [
          {
            path: 'Fax',
            component: Fax
          },
          {
            path: 'Blog',
            component: Blog
          }
        ]
      },
      {
        path: 'AllContacts',
        component: AllContacts
      },
      {
        path: 'Alice',
        component: Alice
      },
    ]
  },
  {
    path: '/UlRouter',
    component: UlRouter
  },
  {
    path: '/About',
    component: About
  },

]


const router = new VueRouter({
  routes,
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
