import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';


Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "./list3",
  }
,
  // {
  //   path: "/body",
  // name: "body",
  // component: () => import("../views/body"),
  // redirect: "./list3"
  // },
  {
     path:"/list3",
     component: () => import("../views/Home"),
     redirect:"/list3/body",
     children:[
     {
         path:"body",
         component:()=>import("views/body"),
         redirect:"/list3/body/musicls",
         children:[
           //这里配置主要内容
           {
             path:"musicls",
             component:()=>import("views/list3")
           }
           ,{
             path:"login",
             component:()=>import("views/login/loginform")
           },
          //  {
          //    path:"play",
          //    component:()=>import("views/bofangqi")
          //  }
         ]
       }
     ]
  }
];



const router = new VueRouter({
  routes,
});

export default router;
