import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Index from './views/news/Index.vue'
import News from './views/news/News.vue'
import Sports from './views/news/Sports.vue'
import Sports1 from './views/news/Sports1.vue'
import Sports2 from './views/news/Sports2.vue'
import Sports3 from './views/news/Sports3.vue'

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/sports',
      component: Sports,
      children: [
        {
          path: 'sports1',
          component: Sports1
        },
        {
          path: 'sports2',
          component: Sports2
        },
        {
          path: 'sports3',
          component: Sports3
        },
      ]
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/index',
      component: Index
    },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
