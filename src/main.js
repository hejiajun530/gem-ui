import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/iconfont.css'
import messagejs from './components/message/message.js'
import loadingjs from './components/loading/loading.js'
import notifjs from './components/notif/notif.js'
import alertjs from './components/alert/alert.js'

Vue.config.productionTip = false
Vue.prototype.$message = messagejs
Vue.prototype.$loading = loadingjs
Vue.prototype.$notif = notifjs
Vue.prototype.$alertjs = alertjs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
