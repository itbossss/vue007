<template>
  <div>
    <div>
      <h2>二级路由</h2>
      <router-link to="/HomePage/FrontNews">首页新闻</router-link>
      <router-link to="/HomePage/ThomepageActivities">首页活动</router-link>
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
