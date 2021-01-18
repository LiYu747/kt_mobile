import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'bgB1y9zSNdFt8eWmYbV29vbzgZfMIx7x'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
