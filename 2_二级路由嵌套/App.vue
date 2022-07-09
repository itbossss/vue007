<template>
  <div>
    <h2>嵌套路由</h2>
    <div>
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/sports">体育</router-link>
    </div>

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
