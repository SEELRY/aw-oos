import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from "./components/about/Contact"
import Delivery from "./components/about/Delivery"
import History from "./components/about/History"
import OrderingGuide from "./components/about/OrderingGuide"

//三级路由
import Phone from "./components/about/contact/Phone"
import personName from "./components/about/contact/PersonName"



export const routes = [
  {path:'/',name:"homeLink",components:{
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
  }},
  { path: '/menu', name: "menuLink",component:Menu},
  { path: '/admin', name: "adminLink",component:Admin},


  { path: '/about', name: "aboutLink",redirect:"/contact",component:About,children:[
    {path:'/contact',name:"contactLink",redirect:"/personname",component:Contact,children:[
      {path:'/phone',name:"phoneNumber",component:Phone},
      {path:'/personname',name:"personName",component:personName}
    ]},
    {path:'/delivery',name:"deliveryLink",component:Delivery},
    {path:'/history',name:"historyLink",component:History},
    {path:'/OrderingGuide',name:"orderingGuideLink",component:OrderingGuide}
  ]},


  { path: '/login', name: "loginLink",component:Login},
  { path: '/register', name: "registerLink",component:Register},
  {path:'*',redirect:'/'}
]