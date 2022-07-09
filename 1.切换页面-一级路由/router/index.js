import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import classify from '../views/classify.vue';
import order from '../views/order.vue';
import my from '../views/my.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: home,
  },
  {
    path: '/classify',
    component: classify,
  },
  {
    path: '/order',
    component: order,
  },
  {
    path: '/my',
    component: my,
  },
];

const router = new VueRouter({
  routes,
});
export default router;
