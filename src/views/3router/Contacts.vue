<template>
  <div>
    <ul>
      <li @click="fn('/contacts/allcontacts')">All contacts</li>
      <li @click="fn('/contacts/alice')">Alice</li>
      <li @click="fn('/contacts/bob')">Bob</li>
    </ul>
    <button @click="random">随机跳转</button>
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["/contacts/allcontacts", "/contacts/alice", "/contacts/bob"],
    };
  },
  methods: {
    fn(path) {
      this.$router.push({
        path,
      });
    },
    random() {
      this.fn(this.arr[Math.floor(Math.random() * 3)]);
    },
  },
};
</script>

<style></style>
