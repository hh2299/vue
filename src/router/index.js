import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
 
]



const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to,from,next) => {
  if(to.path === '/login') return next() //访问Login页,放行
  //获取token
  const tokenStr = window.sessionStorage.getItem('token') 
  if(!tokenStr) return next('/login') //无token强转login页
  next()
})

export default router
