<template>
  <el-container>
    <el-aside width="auto" class="sbk-layout-y">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>-->
      <div class="sbk-layout-icontitle">
        <img src="../files/image/blog.png" alt="博客图片" class="sbk-layout-img">
        <span class="sbk-layout-menu" v-show="!isCollapse">菜单</span>
      </div>
      <el-button
        class="sbk-Layout-width"
        type="primary"
        v-model="isCollapse"
        icon="el-icon-menu"
        @click="changeIsCollapse"
      ></el-button>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="1-1">
              <router-link to="homeContent">展示页</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="articleList">文章列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="vueQuillEditor">文章列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
            <el-menu-item index="1-5">选项5</el-menu-item>
            <el-menu-item index="1-6">选项6</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </template>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
            <el-menu-item index="2-5">选项5</el-menu-item>
            <el-menu-item index="2-6">选项6</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </template>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
            <el-menu-item index="3-4">选项4</el-menu-item>
            <el-menu-item index="3-5">选项5</el-menu-item>
            <el-menu-item index="3-6">选项6</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row :gutter="20" class="sbk-layout-row">
          <el-col :span="24">
            <span class="sbk-layout-font">后台管理系统</span>
          </el-col>
          <el-col :span="4" class="sbk-layout-login">
            <el-dropdown>
              <span class="el-dropdown-link">
                Admin
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>切换账号</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <transition name="el-zoom-in-center">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer>
        <span>©Copyright 2018 songbike版权所有 | 联系电话：18251935175</span>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import VueQuillEditor from "./VueQuillEditor";

export default {
  data() {
    return {
      isCollapse: true
    };
  },
  components: {
    VueQuillEditor
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeIsCollapse: function() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  height: auto;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.sbk-Layout-width {
  margin: 0, 15px;
  width: 100%;
}
.sbk-login-height > .el-container {
  height: 100%;
}
.sbk-layout-icontitle {
  height: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.sbk-layout-img {
  width: 40px;
}
.sbk-layout-menu {
  display: inline-block;
  width: 40px;
}
.sbk-layout-font {
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 20px;
}
.el-footer > span {
  font-size: 13px;
}
.el-footer {
  text-align: center;
}
.sbk-layout-row {
  position: relative;
}
.sbk-layout-login {
  position: absolute;
  right: 0;
  text-align: center;
  z-index: 1;
}
.sbk-layout-y {
  overflow-x: hidden;
  overflow-y: scroll;
}
.sbk-layout-y::-webkit-scrollbar {
  display: none;
}
</style>
