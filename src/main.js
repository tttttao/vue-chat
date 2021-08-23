import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './plugins/ant-design-vue.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')