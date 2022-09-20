import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/font.css'
// 引入全局icon
import '@/icons'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI, { size: "small" });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
