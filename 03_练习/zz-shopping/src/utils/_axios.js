import axios from 'axios';

const _axios = axios.create({
    baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
    timeout: 5000
})

 // 添加请求拦截器
 _axios.interceptors.request.use(function (config) {
     return config
 }, function (error) {
     return Promise.reject(error)
 })

 // 添加响应拦截器
 _axios.interceptors.response.use(function (response) {

     return response.data // 抽出一层
 }, function (error) {
     return Promise.reject(error)
 })

 export default _axios