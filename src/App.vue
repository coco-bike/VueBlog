<template>
  <div id="app" class="sbk-login-background">
    <div v-show="!loginOk">
      <div class="sbk-login-title">宋必可的博客系统</div>
      <transition name="el-zoom-in-center">
        <Login
          v-show="loginState"
          class="sbk-login-from"
          v-on:registerEvent="listenToRegister"
          v-on:loginIsOk="loginEvent"
        ></Login>
      </transition>
      <transition name="el-zoom-in-center">
        <Register v-show="!loginState" v-on:registerEvent="listenToRegisterEvent"></Register>
      </transition>
    </div>
    <div v-show="loginOk">
      <Home></Home>
    </div>
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Home from "./views/Home.vue";

export default {
  name: "app",
  data() {
    return {
      loginState: true,
      loginOk: false
    };
  },
  components: {
    Login,
    Register,
    Home
  },
  methods: {
    listenToRegister: function(data) {
      console.log(data);
      this.loginState = false;
    },
    listenToRegisterEvent: function(data) {
      if (data == "true") {
        this.loginState = true;
      } else {
        this.loginState = false;
      }
    },
    loginEvent: function(data) {
      debugger
      if (data == "true") {
        this.loginOk = true;
      } else {
        this.loginOk = false;
      }
    }
  }
};
</script>

<style>
body {
  margin: 0px;
  height: 937px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.sbk-login-background {
  background: url(files/image/531e9dffbabcb.jpg) no-repeat;
}
.sbk-login-title {
  font-size: 30px;
  color: white;
  padding: 15px;
}
.sbk-login-from {
  margin-top: 20px;
}
.el-form {
  padding: 15px;
  background-color: white;
  border-radius: 15px;
}
</style>
