<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      :class="{ current: isCurrent == index }"
      v-for="(item, index) in tabList"
      :key="index"
      @click="clickFn(index)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span> {{ item.text }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isCurrent: 0,
    };
  },
  computed: {
    ...mapState(["tabList"]),
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    clickFn(index) {
      this.isCurrent = index;
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  cursor: pointer;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
