import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from './views/HomePage.vue'
import classification from './views/classification.vue'
import TheOrder from './views/TheOrder.vue'
import My from './views/My.vue'

import FrontNews from './views/Second/FrontNews.vue'
import ThomepageActivities from './views/Second/ThomepageActivities.vue'

import News from './views/Second/Third/News.vue'
import Activity from './views/Second/Third/Activity.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}


//创建路由规则数组
const routes = [
  {
    path: '/HomePage',
    component: HomePage,
    children: [
      {
        path: 'FrontNews',
        component: FrontNews,
        children: [
          {
            path: 'News',
            component: News
          },
          {
            path: 'Activity',
            component: Activity
          }
        ]
      },
      {
        path: 'ThomepageActivities',
        component: ThomepageActivities
      },
    ]
  },
  {
    path: '/classification',
    component: classification
  },
  {
    path: '/TheOrder',
    component: TheOrder
  },
  {
    path: '/My',
    component: My
  },
]


const router = new VueRouter({
  routes,
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
