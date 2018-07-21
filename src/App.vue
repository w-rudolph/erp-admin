<template>
  <div id="app">
    <Aside />
    <Header />
    <div class="page-main">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Aside from "./views/common/Aside.vue";
import Header from "./views/common/Header.vue";

@Component({
  components: { Aside, Header }
})
export default class App extends Vue {}
</script>
