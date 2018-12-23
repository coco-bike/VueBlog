<template>
  <div>
    <el-row :gutter="20" justify="left" align="center">
      <el-col :span="6">
        <label>标题：</label>
        <el-input placeholder="请输入内容" v-model="titleText" class="sbk-articlelist-width"></el-input>
      </el-col>
      <el-col :span="6">
        <label>姓名：</label>
        <el-select v-model="value8" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
         <el-button v-on:click="loadTableData()" icon="el-icon-search" circle></el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="btitle" label="标题" width="180"></el-table-column>
      <el-table-column prop="bcategory" label="类别" width="180"></el-table-column>
      <el-table-column prop="btraffic" label="访问量"></el-table-column>
      <el-table-column prop="bcommentNum" label="评论数量"></el-table-column>
      <el-table-column prop="bUpdateTime" label="修改时间"></el-table-column>
      <el-table-column prop="bCreateTime" label="创建时间"></el-table-column>
      <el-table-column prop="bRemark" label="备注"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 5, 10, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      options: [
        {
          value: "技术博文",
          label: "技术博文"
        },
        {
          value: "动漫二次元",
          label: "动漫二次元"
        }
      ],
      value8: "",
      currentPage: 1,
      totalCount: 1,
      pageSize: 1,
      titleText:""
    };
  },
  methods: {
    handleSizeChange(val) {
     this.pageSize=val;
     this.loadTableData();
    },
    handleCurrentChange(val) {
      this.currentPage=val;
     this.loadTableData();
    },
    loadTableData() {
      this.$api.get(
        "Blog/GetBlogs",
        { currentPage: this.currentPage, pageSize: this.pageSize,title: this.titleText, bcategory: this.value8},
        r => {
          if (r.data.success) {
            this.tableData = r.data.data;
            this.totalCount = r.data.pageCount;
            this.currentPage = r.data.page;
          } 
          else 
          {
            console.log("登录失败");
          }
        }
      );
    }
  },
  mounted: function(){
    this.loadTableData();
   }
  // watch:function(){
  //   bUpdateTime:
  // }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
  }
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.sbk-articlelist-width {
  width: 60% !important;
}
</style>
