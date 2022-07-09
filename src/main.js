import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import My from './views/My.vue'
import Classification from './views/Classification.vue'
import Index from './views/Index.vue'
import Order from './views/Order.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/my',
      component: My
    },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/order',
      component: Order
    },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
