<template>
<div class="bigger">
  <!-- 头部区域 -->
  <el-header>
    <div class="home_logo">
      logo
    </div>
    <el-button type="info" size="mini">退出</el-button>
  </el-header>
  <!-- 主要区域 -->
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="300px">
          <el-menu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-menu>
    </el-aside>
    <!-- 内容区域 -->
    <el-main>Main</el-main>
  </el-container>
  
</div>
</template>

<script>
export default{
  data () {
    return {
      
    }
  },
  created () {
    this.getMenu()
  },
  methods : {
    // 获取菜单权限
    async getMenu() {
      const {data:res} = await this.$http.get('menus')
      console.log(res);
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: #b50c1b ;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 40px;
  font-weight: 900;
  padding: 5px;

}
.el-aside {
  background-color: #9a2503;
}
.el-container {
  height: 100%;
}
.el-main {
  background-color: #d8c8d3;
}
</style>