import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';


Vue.use(VueRouter);





// let body={
//   path: "/body",
//   name: "body",
//   component: () => import("../views/body"),
//   redirect: "./list3",
//   children: [
//     {
//     path: "/list3",
//     name: "list3",
//     // redirect:"/list3/list",
//     children:[
//       {
//         path:"bofangqi",
//         name: "bofangqi",
//         component:()=>import("../views/bofangqi")
//       },
//       {
//         path:"list",
//         component:()=>import("views/list3")
//       }
//     ]
//   },


//   ]

// }

// let body1={
//     path:"/body2",
//     name:"body2",
//     component:()=>import("@/views/body2/body2")
// }

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
         
         children:[
           //这里配置主要内容
           {
             path:"musicls",
             component:()=>import("views/list3")
           }
           ,{
             path:"login",
             component:()=>import("views/login/loginform")
           }
         ]
       }
     ]
  }
];



const router = new VueRouter({
  routes,
});

export default router;
