import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}
const mutations = {
    ADDLIST(state, val) {
        state.tabList.forEach((item, index) => {
            item['to'] = val[index]
        })
    },
    ADDNEWLIST(state, val) {
        state.list = val
    }
}
const state = {
    tabList: [
        {
            iconText: "icon-shangpinliebiao",
            text: "商品列表",
            componentName: "MyGoodsList",
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