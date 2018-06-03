import Vue from 'vue'
import App from './App'

// Import storage
import store from '@/storage'

// Import router config
import router from '@/router'

// Require the main Sass manifest file
import './scss/main.scss'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
