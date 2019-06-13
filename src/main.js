import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'

import {store} from './store/store.js'

Vue.use(VueRouter)

//默认跟路径
axios.defaults.baseURL = 'https://pizza-69e10.firebaseio.com/'

//配置Vue原型（使在任何组件中都能使用axios）
Vue.prototype.http = axios



const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return { x:0, y:100 }
    // return {selector:'.btn'}
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  }
})

// //全局守卫
// router.beforeEach((to,from,next)=>{
//   // alert("还没有登录，请先登录！");
//   // next();

//   //判断store.gettes.isLogin === false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录！");
//     next('/login');
//   }
// });


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
