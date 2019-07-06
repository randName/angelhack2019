import Vue from 'vue'
import './plugins/vuetify'
import './plugins/amplify'

import store from './store'
import router from './router'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')