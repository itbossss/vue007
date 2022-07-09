<template>
  <div>
    <router-link to="/ui_router">UI_Router</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/about">About</router-link>
    <hr />
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
