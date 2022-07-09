import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import UI_Router from './views/3router/UI_Router.vue'
import Contacts from './views/3router/Contacts.vue'
import About from './views/3router/About.vue'
//二级路由
import Allcontacts from './views/3router/3router-2/Allcontacts.vue'
import Alice from './views/3router/3router-2/Alice.vue'
import Bob from './views/3router/3router-2/Bob.vue'
//三级路由
import Blog from './views/3router/3router-2/3router-3/Blog.vue'
import Fax from './views/3router/3router-2/3router-3/Fax.vue'

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/ui_router'
    },
    {
      path: '/ui_router',
      component: UI_Router
    },
    {
      path: '/contacts',
      component: Contacts,
      children: [
        {
          path: 'allcontacts',
          component: Allcontacts,
          name: 'Allcontacts'
        },
        {
          path: 'alice',
          component: Alice,
          name: 'Alice'

        },
        {
          path: 'bob',
          component: Bob,
          name: 'Bob',
          children: [
            {
              path: 'blog',
              component: Blog
            },
            {
              path: 'fax',
              component: Fax
            },
          ]
        },
      ]
    },
    {
      path: '/about',
      component: About
    },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
