<template>
    <div class="page-header">
        <div class="site-title">ERP管理系统</div>
        <div class="right-content">
            <el-dropdown class="account-dropdown" trigger="click">
                <span class="el-dropdown-link">
                    Admin
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>通知</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts">
export default {}
</script>
<style scoped>
.site-title {
  display: inline-block;
  line-height: 50px;
  font-size: 20px;
  padding-left: 20px;
  width: 200px;
  box-sizing: border-box;
}
.right-content {
  float: right;
  line-height: 50px;
  padding-right: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.account-dropdown {
  margin-left: 15px;
}
</style>
