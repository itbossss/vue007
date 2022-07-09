import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
import store from './vuex/index'
import router from './router/index'


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
