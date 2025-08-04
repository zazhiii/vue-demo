import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 组件的全局注册
import BaseProgress from '@/components/BaseProgress.vue'
Vue.component('BaseOne', BaseProgress)

new Vue({
  render: h => h(App),
}).$mount('#app')
