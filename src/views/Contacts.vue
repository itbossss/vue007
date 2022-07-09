<template>
  <div>
    <ul>
      <li @click="clickFn('/Contacts/AllContacts')">AllContacts</li>
      <li @click="clickFn('/Contacts/Alice')">Alice</li>
      <li @click="clickFn('/Contacts/Bob')">Bob</li>
    </ul>

    <button @click="get">随机显示</button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
    }
  },
  methods: {
    clickFn(targetPath) {
      this.$router.push({
        path: targetPath,
      })
    },
    get() {
      const arr = ['/contacts/allcontacts', '/contacts/alice', '/contacts/bob']
      this.$router.push({
        path: arr[Math.floor(Math.random() * 3)],
      })
    },
  },
}
</script>

<style></style>
