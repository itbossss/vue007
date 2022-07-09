<template>
  <div>
    <h1>Bob</h1>
    <ul>
      <li><router-link to="/Contacts/Bob/Blog">Blog</router-link></li>
      <li><router-link to="/Contacts/Bob/Fax">Fax</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
