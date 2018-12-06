<template>
  <div id="app">
    <div class="sbk-title">
      宋必可的博客系统
    </div>
    <Login></Login>
  </div>
</template>

<script>

import Login from './views/Login.vue'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sbk-title{
  font-size: 30px;
  padding: 15px;
}
</style>
