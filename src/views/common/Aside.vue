<template>
    <div :class="['page-aside', isCollapse ? 'collapsed' : 'opened']">
        <div class="menu-control">
            <div class="control-button" type="text" v-if="isCollapse" @click="isCollapse=false">
                <i class="el-icon-d-arrow-right"></i>
            </div>
            <div class="control-button" type="text" v-else @click="isCollapse=true">
                <i class="el-icon-d-arrow-left"></i>&nbsp;&nbsp;折叠侧边栏
            </div>
        </div>
        <el-menu 
            background-color="#fafafa"

            :collapse-transition="false" ref="menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航五</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="5-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="5-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="5-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Aside extends Vue {
  isCollapse: boolean = false;

  handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath);
    console.log(this.$refs.menu);
  }
  handleClose(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
}
</script>
<style lang="scss" scoped>
.page-aside.opened {
  .menu-control {
    width: 200px;
  }
}
.page-aside.collapsed {
  .control-button {
    color: #666;
    text-align: center;
    padding-left: 0;
  }
}
.menu-control {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 65px;
  height: 40px;
  transition: width 0.3s linear;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  cursor: pointer;
  color: #707070;
  background: #fff;
  &:hover {
    background: #eee;
    color: #000;
  }
}
.control-button {
  width: 100%;
  line-height: 40px;
  text-align: left;
  padding-left: 10px;
  font-size: 14px;
}
</style>
