import Vue from 'vue'
import App from './App.vue'

import './assets/scss/style.scss'
import router from './router/index'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

//把封装的card组件注册为全局组件
import Card from "./components/Card";
Vue.component('m-card', Card)

//再一步高度封装card组件注册为全局组件
import ListCard from "./components/ListCard";
Vue.component('m-list-card', ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
  //baseURL: 'http://localhost:3333/web/api'
})

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
