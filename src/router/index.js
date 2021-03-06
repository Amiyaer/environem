import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = ()=>import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Login')
const Super = ()=>import('../components/SuperUser/SuperUser.vue')
const SuperHelp = ()=>import('../components/SuperUser/SuperHelp.vue')
const SuperHome = ()=>import('../components/SuperUser/SuperHome.vue')
const User = ()=>import('../components/SuperUser/user.vue')
const StaffHome = ()=>import('../components/Staff/StaffHome.vue')
const Staff = ()=>import('../components/Staff/Staff.vue')
const StaffHelp = ()=>import('../components/Staff/StaffHelp.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },{
    path:'/login',
    component:Login
  },{
    path:'/superUser',
    component:Super,
    redirect:'/superHome',
    children:[{
      path:'/superHome',
      component:SuperHome
    },{
      path:'/user',
      component:User
    },{
      path:'/superHelp',
      component:SuperHelp
    }]
  },{
    path:'/staff',
    component:Staff,
    redirect:'/staffHome',
    children:[{
      path:'/staffHome',
      component:StaffHome
    },{
      path:'/staffHelp',
      component:StaffHelp
    }]
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
