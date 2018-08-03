<template>
  <div id="app">
    <Aside />
    <Header />
    <div class="page-main">
      <Tabbar />
      <div class="main-view">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Aside from './views/common/Aside.vue';
import Header from './views/common/Header.vue';
import Tabbar from './views/common/Tabbar.vue';

@Component({
  components: { Aside, Header, Tabbar }
})
export default class App extends Vue {}
</script>
