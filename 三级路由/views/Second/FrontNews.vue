<template>
  <div>
    <div>
      <h2>三级路由</h2>
      <router-link to="/HomePage/FrontNews/News">新闻</router-link>
      <router-link to="/HomePage/FrontNews/Activity">活动</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
