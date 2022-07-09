import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {}
const mutations = {}
const state = {
    tabList: [
        {
            iconText: "icon-shangpinliebiao",
            text: "商品列表",
            componentName: "MyGoodsList"
        },
        {
            iconText: "icon-sousuo",
            text: "商品搜索",
            componentName: "MyGoodsSearch"
        },
        {
            iconText: "icon-user",
            text: "我的信息",
            componentName: "MyUserInfo"
        }
    ]
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})