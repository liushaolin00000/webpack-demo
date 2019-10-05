//导入vue插件 需要下载    这个vue的包没有解析插值表达式或指令的功能，是一个缩小版的vue
//解决办法：建立vue单文件组件，然后交由webpack编译 单文件组件相当于局部组件
import Vue from 'vue';
//导入路由插件
import vueRouter from 'vue-router'
//引入vant所有组件
import Vant from 'vant';
//局部方式导入Toast
import {Toast} from 'vant'
//1.导入组件
import App from './App.vue'
//2.导入登录页面组件
import Login from '@/pages/Login'
//2导入注册页面组件
import Register from '@/pages/Register'
import VueRouter from 'vue-router';
//导入ajax封装装组件
import axios from 'axios'
//注册路由插件
Vue.use(vueRouter)
//注册vant组件
Vue.use(Vant);
//把axios挂载到原型对象上
Vue.prototype.$axios = axios;
//添加后台请求基准路径,以后每次请求都会自动在前面加上该路径
axios.defaults.baseURL = 'http://localhost:3000'
//创建路由配置
const routes = [
  //1将登录页的路径和组件关联起来
  {
    path: '/login',
    component: Login
  },
  //2将注册页的路径和组件关联起来
  {
    path: '/register',
    component: Register
  }
]
//创建路由对象
const router = new VueRouter({
  routes
})
//axios统一响应拦截器
axios.interceptors.response.use(res => {
  const {
    message,
    statusCode
  } = res.data;

  // 能正常请求后台，但是响应的code是401时弹出错误
  if (statusCode == 401) {
    Toast.fail(message);
  }
  //必须返回res
  return res;
})
//2.创建路由根实例
new Vue({
  el: '#app',
  //3.指定一个组件渲染根实例，这个组件可以成为最底层的组件
  render(createElement) {
    //render函数是一个固定的写法
    return createElement(App)
  },
  //将路由挂载到根实例
  router
})