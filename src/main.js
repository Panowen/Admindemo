// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index.js"
Vue.config.productionTip = false
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element)
/* eslint-disable no-new */

var vm=new Vue({
  router,
  store:store,
  render:f=>f(App)
}).$mount("#app")

