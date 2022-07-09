<template>
  <div>
    <div>体育-改变人生</div>
    <br />
    <br />
    <router-link to="/sports/sports1">体育的主页</router-link>
    <router-link to="/sports/sports2">国内的体育</router-link>
    <router-link to="/sports/sports3">国外的体育</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
