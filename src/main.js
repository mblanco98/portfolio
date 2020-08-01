import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import plugins from './plugins'
Vue.config.productionTip = false
import * as eva from 'eva-icons'

new Vue({
  eva,
  router,
  ...plugins,
  render: h => h(App)
}).$mount('#app')
