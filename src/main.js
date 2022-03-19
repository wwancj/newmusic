import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios"

// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// axios.defaults.crossDomain = true;

Vue.prototype.$axios=axios
Vue.prototype.$gettime= function time(nS) {
  return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, " ");
},




 //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// axios.defaults.headers.common['Authorization'] = ''; 

// axios.defaults.baseURL="https://autumnfish.cn"
// axios.defaults.baseURL="http://localhost:3000"
axios.defaults.withCredentials = true; 
axios.defaults.baseURL=process.env.VUE_APP_API_URL
// axios.defaults.baseURL="http://127.0.0.1/api"
//git 的 token
//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  

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// console.log(store,store);