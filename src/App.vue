<template>
  <div class="app" id="app">
    <div class="header">
      <Header></Header>
    </div>
    <div class="home">
      <router-view></router-view>
    </div>
    <div class="footer">
      <Fooder></Fooder>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/views/commonents/header/header.vue";
import Fooder from "@/views/commonents/fooder/fooder.vue";
@Options({
  components: {
    Header,
    Fooder,
  },
  setup() {
    const index = "这是一段自发货窜";
    return {
      index: index,
    };
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  margin: 0;
  padding: 0;
  background: #fefefe;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

.header {
  height: 100px;
  width: 100vw;
}
.footer {
  height: 400px;
  width: 100vw;
}
.home {
  min-height: calc(100vh - 500px);
  width: 900px;
  margin: 0 auto;
}
</style>
