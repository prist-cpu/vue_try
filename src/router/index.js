import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 用户进入时跳转登录界面
  {path:'/',redirect:'/login'},
  // 导入路由
  {path:'/login',component:Login},
  {path:'/home',component:Home}

  
]

const router = new VueRouter({
  routes
})

// 挂载路由守卫
router.beforeEach((to,from,next) => {
  // 如果去登录界面直接跳转
  if ( to.path === '/login' ) return next()
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果token不在强制跳转登录，否则跳转下一步
  if (!tokenStr) return next('/login')
  next()
})


export default router
