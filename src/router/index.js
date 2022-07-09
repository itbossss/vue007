import Vue from 'vue'
import VueRouter from 'vue-router'

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        
    ]
})
