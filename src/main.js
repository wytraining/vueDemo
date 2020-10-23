import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import './styles/index.scss'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
