<template>
  <div>
    <div class="FirstBox">
      <h1>一级路由</h1>
      <router-link to="/HomePage">首页</router-link>
      <router-link to="/classification">分类</router-link>
      <router-link to="/TheOrder">订单</router-link>
      <router-link to="/My">我的</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.FirstBox {
  margin-bottom: 20px;
}
.FirstBox a {
  margin-right: 10px;
  text-decoration: none;
}
.router-link-active {
  color: white;
  background: black;
}
</style>
