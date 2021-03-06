import Vue from 'vue'
import App from './App'
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false
Vue.use(ToggleButton)

global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
