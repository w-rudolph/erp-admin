import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import ElemetUI from 'element-ui';
import './app.scss';

Vue.use(ElemetUI, { size: 'small' });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
