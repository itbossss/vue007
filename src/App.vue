<template>
  <div>
    <h2>三级路由嵌套</h2>
    <div>
      <router-link to="/router">UI_Router</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <hr />
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
