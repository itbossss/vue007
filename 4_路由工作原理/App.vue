<template>
  <div>
    <h1>App组件</h1>
    <div>
      <a href="#/home">首页</a>&nbsp; <a href="#/movie">电影</a>&nbsp;
      <a href="#/about">关于</a>&nbsp;
    </div>
    <component :is="comName"></component>
  </div>
</template>

<script>
import MyHome from './views/MyHome.vue'
import MyMovie from './views/MyMovie.vue'
import MyAbout from './views/MyAbout.vue'
export default {
  data() {
    return {
      comName: 'MyHome',
    }
  },
  components: {
    MyHome,
    MyMovie,
    MyAbout,
  },
  created() {
    window.onhashchange = () => {
      console.log(location.hash)
      switch (location.hash) {
        case '#/home':
          this.comName = 'MyHome'
          break
        case '#/about':
          this.comName = 'MyAbout'
          break
        case '#/movie':
          this.comName = 'MyMovie'
          break
      }
    }
  },
}
</script>

<style scope>
a {
  margin-left: 5px;
}
</style>
