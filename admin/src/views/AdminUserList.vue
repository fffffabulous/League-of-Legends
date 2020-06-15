<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="edit(scope.row)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/admin_users");
      //console.log('user', res.data, localStorage)
      this.items = res.data;
    },
    edit(row) {
        console.log('row', row)
        if (row.username === "admin" || row.username === "fabulous") {
        this.$notify({
          title: "警告",
          message: "你没有权限进行该操作",
          type: "warning"
        });
      } else {
          this.$router.push(`/admin_users/edit/${row._id}`)
      }
    },
    remove(row) {
      //判断用户是否为fabulous 不是没有删除权限
      if (row.username === "admin" || row.username === "fabulous") {
        this.$notify({
          title: "警告",
          message: "你没有权限进行该操作",
          type: "warning"
        });
      } else {
        //console.log("userrrrrrrrr", row.username);
        this.$confirm(`是否确定要删除 "${row.username}"`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(async () => {
          await this.$http.delete(`rest/admin_users/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch();
        });
      }
    }
  },
  created() {
    this.fetch();
  }
};
</script>
