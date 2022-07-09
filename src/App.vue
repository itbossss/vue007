<template>
  <div>
    <MyHeader />
    <MyTabBar />
  </div>
</template>

<script>
import MyHeader from "./components/business/MyHeader.vue";
import MyTabBar from "./components/business/MyTabBar.vue";
// import MyHeader from "./components/business/MyHeader.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyTabBar,
  },
};
</script>

<style></style>
