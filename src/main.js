import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [

  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
