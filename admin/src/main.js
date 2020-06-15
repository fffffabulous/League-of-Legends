import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

import './style.css'


Vue.use(ElementUI)
Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http


//混入 可以吧方法注册到所有组件
Vue.mixin({
  computed: {
    uploadUrl(){
      //console.log('this.$http.defaults.baseURL', this.$http.defaults.baseURL)
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
