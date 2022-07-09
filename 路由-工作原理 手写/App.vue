<template>
  <div>
    <h1>App组件</h1>
    <a href="#/home">首页</a>&nbsp; <a href="#/movie">电影</a>&nbsp;
    <a href="#/about">关于</a>&nbsp;
    <component :is="comName"></component>
  </div>
</template>

<script>
// 路由 - 工作原理手写
import MyHome from '@/views/MyHome.vue'
import MyMovie from '@/views/MyMovie.vue'
import MyAbout from '@/views/MyAbout.vue'
export default {
  components: {
    MyHome,
    MyMovie,
    MyAbout,
  },
  data() {
    return {
      comName: 'MyHome',
    }
  },
  created() {
    window.onhashchange = () => {
      switch (location.hash) {
        case '#/home':
          this.comName = 'MyHome'
          break
        case '#/movie':
          this.comName = 'MyMovie'
          break
        case '#/about':
          this.comName = 'MyAbout'
          break
      }
    }
  },
}
</script>

<style></style>
