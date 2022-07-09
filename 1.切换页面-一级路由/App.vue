<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/classify">分类</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/my">我的</router-link>

    <h3>显示路由切换的页面⬇</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
