import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/admin/api',
})

//登录验证拦截器
http.interceptors.request.use(config => {
    if(localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
}, error => {
    return Promise.reject(error)
})


//通用的错误处理拦截器
http.interceptors.response.use(res => {
    return res
}, error => {
    //console.log('response.data', error.response.data.message)
    if(error.response.data.message) {
        Vue.prototype.$message({
            type: "error",
            message: error.response.data.message
        })
        console.log('error.response',error.response)
        if(error.response.status === 401) {
            router.push('/login')
        }
    }
    return Promise.reject(error)
})

export default http