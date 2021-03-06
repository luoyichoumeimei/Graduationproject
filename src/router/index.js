import Vue from "vue"
import VueRouter from "vue-router"
const Home = ()=>import ("../views/home/Home");
const Profile = ()=>import ("../views/profile/Profile");
const Shopcart = ()=>import ("../views/shopcart/Shopcart");
const Detail = ()=>import ("../views/detail/Detail");
Vue.use(VueRouter);

const routes = [{
  path:"",
  redirect:"/home"
},{
  path:"/home",
  component:Home
},{
  path:"/profile",
  component:Profile
},{
  path:"/shopcart",
  component:Shopcart
},{
  path:"/detail/:id",
  component:Detail
}

];

const router = new VueRouter({
  routes,
  mode:"history"
})
export default router
