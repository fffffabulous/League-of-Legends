<template>
  <div>
    <h1>英雄列表</h1>
    <el-table :data="items.slice((currentPage-1)*pageSize,currentPage*pageSize)" stripe border>
      <el-table-column prop="_id" label="ID" width="350"></el-table-column>
      <el-table-column prop="name" label="英雄名称" width></el-table-column>
      <el-table-column prop="title" label="称号" width></el-table-column>
      <el-table-column prop="avatar" label="头像" width>
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt style="height: 3rem" />
        </template>
      </el-table-column>
      <el-table-column prop="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/heroes/edit/${scope.row._id}`)" type="text">编辑</el-button>
          <el-button type="text" size @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      style="margin-top: 15px"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 5, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parseInt(total)"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      // 总条数
      total: 200,
      // 当前页数
      currentPage: 1,
      pageSize: 10,
      // 搜索内容
      searchName: ""
    };
  },
  methods: {
handleSizeChange(newSize) {
      // pagesize改变触发
      this.pageSize = newSize
    },
    handleCurrentChange(newPage) {
      // 页码改变触发
      this.currentPage = newPage
    },

    async fetch() {
      const res = await this.$http.get("/rest/heroes");
      //console.log('res.data', res.data)
      this.items = res.data;
    },
    edit() {},
    remove(row) {
      this.$confirm(`是否确定要删除分类 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`/rest/heroes/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
