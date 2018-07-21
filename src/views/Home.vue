<template>
  <div class="home">
    <div style="width:400px">
      <el-table :data="users" border striped>
        <el-table-column label="名字" prop="name" />
        <el-table-column label="邮箱" prop="email" />
        <el-table-column label="性别" prop="sex" />
      </el-table>
    </div>
    <hr>
    <el-select v-model="selectItem">
      <el-option v-for="item in items" :key="item.value" :value="item.value" :label="item.label" />
    </el-select>
    Label: {{selectItemLabel}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { apiGetUsers } from "@/services/user.service";
import { UserModel } from "@/models/user.model";
import { ItemType } from "@/models/base.model";

@Component
export default class Home extends Vue {
  /** data */
  users: UserModel[] = [];
  items: ItemType[] = [
    { value: "0", label: "Item 1" },
    { value: "1", label: "Item 2" },
    { value: "2", label: "Item 3" },
    { value: "3", label: "Item 4" }
  ];
  selectItem: string = "";

  /** watch */
  @Watch("selectItem")
  onItemChange(nv: string, ov: string) {
    console.log(nv, ov);
  }

  /** computed */
  get selectItemLabel(): string {
    const item = this.items.find(it => it.value === this.selectItem) as ItemType;
    return item && item.label;
  }

  /** method */
  setUsers(): void {
    this.users = apiGetUsers();
  }

  created() {
    this.setUsers();
  }
}
</script>
