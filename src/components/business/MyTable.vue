<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td>
          <span
            v-for="obj in item.tags"
            :key="obj"
            style="margin-right: 8px"
            class="badge badge-info"
            >{{ obj }}</span
          >
        </td>
        <td><button>删除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyTable",
  computed: {
    ...mapState(["list"]),
  },
  created() {},
};
</script>

<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
