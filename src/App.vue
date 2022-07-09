<template>
  <div>
    <router-link to="index">主页</router-link>
    <router-link to="news">新闻</router-link>
    <router-link to="sports">体育</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
a {
  margin-right: 8px;
}
</style>
