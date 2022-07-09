<template>
  <div>
    <a href="#/myabout">首页</a>
    <a href="#/myhome">电影</a>
    <a href="#/mymovie">关于</a>
    <component :is="comName"> </component>
  </div>
</template>

<script>
import MyAbout from "./views/extend/MyAbout.vue";
import MyHome from "./views/extend/MyHome.vue";
import MyMovie from "./views/extend/MyMovie.vue";

export default {
  name: "App",
  data() {
    return {
      comName: "MyAbout",
    };
  },
  components: {
    MyAbout,
    MyHome,
    MyMovie,
  },
  created() {
    window.onhashchange = () => {
      switch (location.hash) {
        case "#/myabout":
          this.comName = "MyAbout";
          break;
        case "#/myhome":
          this.comName = "MyHome";
          break;
        case "#/mymovie":
          this.comName = "MyMovie";
          break;
      }
    };
  },
};
</script>

<style>
a {
  margin-right: 8px;
}
</style>
