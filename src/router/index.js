import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import classify from '../views/classify.vue';
import order from '../views/order.vue';
import my from '../views/my.vue';
import home1 from '../views/two/home1.vue';
import home2 from '../views/two/home2.vue';
import third from '../views/two/three/third.vue';
import four from '../views/two/three/four.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: home,
    children: [
      {
        path: '/two/home1',
        component: home1,
        children: [
          {
            path: '/two/three/third',
            component: third,
          },
          {
            path: '/two/three/four',
            component: four,
          },
        ],
      },
      {
        path: '/two/home2',
        component: home2,
      },
    ],
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
