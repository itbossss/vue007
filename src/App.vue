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
    this.$store.commit("ADDLIST", tos);
    //获取列表数据
    this.$axios({
      url: "api/goods",
    }).then((res) => {
      this.$store.commit("ADDNEWLIST", res.data.data);
      console.log(this.$store.state);
    });
  },
};
</script>

<style></style>
