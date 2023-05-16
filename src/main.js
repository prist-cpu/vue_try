import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局css
import './assets/gloable.css'

// 导入基准地址
import axios  from 'axios'
// import { config } from 'vue/types/umd'
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
// 挂载为全局
Vue.prototype.$http = axios
// 对请求头进行预处理
axios.interceptors.request.use(config => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
