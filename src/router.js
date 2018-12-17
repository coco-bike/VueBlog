import Vue from "vue";
import Router from "vue-router";
import HomeContent from "./views/HomeContent.vue";
import Layout from "./views/Layout.vue";
import ArticleList from "./views/ArticleList.vue";
import VueQuillEditor from "./views/VueQuillEditor.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [{
      path: "/homeContent",
      name: "homeContent",
      component: HomeContent
    },
    {
      path: "/articleList",
      name: "articleList",
      component: ArticleList
    },
    {
      path: "/layout",
      name: "layout",
      component: Layout,
      redirect: "/layout/homeContent",
      children: [{
        path: "homeContent",
        component: HomeContent
      },{
        path: "articleList",
        component: ArticleList
      },{
        path: "vueQuillEditor",
        component: VueQuillEditor
      }]
    },
    {
      path: "/",
      name: "login",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Login.vue"),
        children:[{
          path:"layout",
          component:Layout
        }]
    }
  ]
})