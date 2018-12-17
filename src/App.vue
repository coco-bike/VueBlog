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
    <div v-show="loginOk" class="sbk-login-height">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

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
    Register
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
      if (data == "true") {
        this.loginOk = true;
      } else {
        this.loginOk = false;
      }
    }
  },
  watch: {
    loginOk: function(newvalue, oldvalue) {
      if (newvalue) {
        this.$router.push("/layout");
      }
    }
  }
};
</script>

<style>
html,
body {
  margin: 0px;
  height: 100%;
  color: #606266;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.sbk-login-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  background: url(files/image/531e9dffbabcb.jpg);
}
.sbk-login-title {
  text-align: center;
  margin-top: 200px;
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
.sbk-login-height {
  height: 100%;
}
</style>
