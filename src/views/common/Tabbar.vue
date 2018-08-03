<template>
    <div class="tab-bar">
        <div class="tags">
            <template v-for="i in 20">
                <el-tag @click.native="onTagClick" :key="i" closable>标签{{i}}</el-tag>
            </template>
        </div>
        <div class="settings">
            <el-dropdown size="mini" split-button type="primary">
                标签选项
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>关闭所有</el-dropdown-item>
                    <el-dropdown-item>关闭其它</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Tabbar extends Vue {
  onTagClick(evt: any) {
    evt.srcElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
</script>
<style scoped>
.tags {
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
}
.settings {
  position: absolute;
  right: 0;
  top: 0;
  box-shadow: -3px 0 6px 3px rgba(0, 0, 0, 0.1);
}
.el-tag {
  margin: 0 2px;
  cursor: pointer;
}
</style>
