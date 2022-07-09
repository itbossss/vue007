<template>
  <div>
    <MyHeader />
    <div style="margin-top: 45px">
      <router-view></router-view>
    </div>

    <MyTabBar />
  </div>
</template>

<script>
import MyHeader from "./components/business/MyHeader.vue";
import MyTabBar from "./components/business/MyTabBar.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyTabBar,
  },
  created() {
    const tos = ["/mygoodslist", "/mygoodssearch", "/myuserinfo"];
    this.$store.commit('ADDLIST',tos)
  },
};
</script>

<style></style>
