import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import api from './http/api'
import { IndexBar, IndexAnchor } from 'vant';
import { Lazyload } from 'vant';
import { PullRefresh } from 'vant';
import { AddressList } from 'vant';
import { Dialog } from 'vant';  //弹出框
import utils from './utils'
import { DatetimePicker } from 'vant';


Vue.use(DatetimePicker);

Vue.use(AddressList);
Vue.use(Dialog);   //弹出框
Vue.use(PullRefresh);
Vue.use(Lazyload);

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$utils = utils
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
