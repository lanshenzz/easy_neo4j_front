import Vue from 'vue'
import App from './App'
import axios from "axios";
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
axios.defaults.baseURL = '/api';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
