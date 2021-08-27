import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './plugins/ant-design-vue.js'
import './plugins/element-ui.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
