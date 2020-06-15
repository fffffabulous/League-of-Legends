<template>
  <el-container style="height: 100vh;">
    <el-aside width="initial" style="background-color: #333333">
      <el-menu
        router
        :default-active="$route.path"
        background-color="#333333"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div index="0" class="lol" @click="$router.push('/')">
          <img src="https://i.loli.net/2020/06/15/Mn7Zk5ahVN6JAu4.png" alt />
        </div>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">物品</template>
            <el-menu-item index="/items/create">新建物品</el-menu-item>
            <el-menu-item index="/items/list">物品列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title" class="myfont">
            <i class="el-icon-s-custom"></i>英雄管理
          </template>

          <el-menu-item-group>
            <template slot="title">英雄</template>
            <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-wallet"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title">广告位</template>
            <el-menu-item index="/ads/create" collapse="false">新建广告位</el-menu-item>
            <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-guide"></i>系统设置
          </template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span @click="logout" class="pointer">退出</span>
      </el-header>

      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
html,
body {
  padding: 0;
  margin: 0;
}

.el-header {
  background-color: #d5d2d5;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    return {
        isCollapse: 1
    };
  },
  methods: {
    // 退出账号
    logout() {
      localStorage.token = "";
      this.$router.push("/login");
    }
  }
};
</script>
<style>
.lol {
  height: 60px;
  color: yellow;
}
.text {
  margin-left: 10px;
}
.lol img {
  height: 55px;
  width: 190px;
}
.el-menu {
  width: 200px;
}

.lol:hover {
  cursor: pointer;
  /*光标呈现为指示链接的指针（一只手）*/
}
.pointer:hover {
  cursor: pointer;
  color: rgb(226, 47, 47);
  /*光标呈现为指示链接的指针（一只手）*/
}

.el-submenu__title:hover {
  background-color: rgb(89, 228, 25);
}
</style>