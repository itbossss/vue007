import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import MyGoodsList from "../components/MyGoodsList.vue";
import MyGoodsSearch from "../components/MyGoodsSearch.vue";
import MyUserInfo from "../components/MyUserInfo.vue";

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/mygoodslist'
        },
        {
            path: '/mygoodslist',
            component: MyGoodsList
        },
        {
            path: '/mygoodssearch',
            component: MyGoodsSearch
        },
        {
            path: '/myuserinfo',
            component: MyUserInfo
        },
    ]
})
