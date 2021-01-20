import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/iconfont.css'
import messagejs from './components/message/message.js'

Vue.config.productionTip = false
Vue.prototype.$messagejs = messagejs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
