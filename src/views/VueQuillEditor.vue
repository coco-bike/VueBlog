<template>
  <div>
    <Editor v-on:contentChange="contentEvent"></Editor>
    <el-button type="success" v-on:click="submitContet">上传文章</el-button>
  </div>
</template>
<script>
import Editor from "./../components/Editor.vue";

export default {
  components: {
    Editor
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    contentEvent: function(data) {
      this.$emit("contentChange", data);
      this.content = data;
    },
    submitContet() {
      this.$api.post(
        "Blog/SaveArticleContent",
        { title: "标题", content: this.content },
        r => {
          if (r.data.success == "true") {
            this.$notify({
              type: "success",
              message: r.data.data + "!",
              duration: 3000
            });
          } else {
            this.$message({
              type: "error",
              message: "发表失败",
              showClose: true
            });
          }
        }
      );
    }
  }
};
</script>
