<template>
  <div>
    <ul>
      <li @click="clickFn('/contacts/allcontacts')">All_contacts</li>
      <li @click="clickFn('/contacts/alice')">Alice</li>
      <li @click="clickFn('/contacts/bob')">Bob</li>
      <button @click="btnFn">随机显示</button>
      <hr />
      <div><router-view></router-view></div>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn(targetPath) {
      this.$router.push({
        path: targetPath,
      })
    },
    btnFn() {
      const arr = ['/contacts/allcontacts', '/contacts/alice', '/contacts/bob']

      this.$router.push({
        path: arr[Math.floor(Math.random() * 3)],
      })
    },
  },
}
</script>

<style></style>
