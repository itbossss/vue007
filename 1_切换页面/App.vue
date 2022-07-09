<template>
  <div>
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/class">分类</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/info">我的</router-link>
    </div>
    <h2>以下显示路由切换的页面</h2>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {}
</script>

<style scope>
a {
  margin-left: 5px;
}
</style>
