import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js"
import "./plugins/vue-quill-editor.js"

// 引用API文件
import api from './api/http.js';

//配置测试环境
Vue.config.productionTip = false;

// 将API方法绑定到全局
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
