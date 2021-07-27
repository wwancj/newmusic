import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';




Vue.use(VueRouter);



let mylist={
  path:"/mylist",
  name:"mylist", 
  components: {
    left:()=>import("../views/mylist/myleft"),
     right:()=>import('../views/mylist/myright.vue'),
     bfq:()=>import("../views/bofangqi")
  }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "./body",
    children: [{
      path: "/body",
      name: "body",
      redirect: "./list3",
      component: () => import("../views/body"),
      children: [{
        path: "/bofangqi",
        name: "bofangqi",
        // component: () => import('../views/bofangqi')
        components: {
          left:() => import('../views/left.vue'),
          myleft:()=>import('../views/mylist/myleft.vue'),
          right:()=>import("../views/bofangqi")
        }
      }

        , {
        path: "/list3",
        name: "list3",
        // component: () => import('../views/list3.vue'),
        components: {
          right:() => import('../views/list3.vue'),
          left:()=>import("../views/left.vue"),
          bfq:()=>import("../views/bofangqi")
        }
      },
      mylist

      ]

    }]
    //     children:[ {
    //     path:"/bofangqi",
    //     name:"bofangqi",
    //     component:()=>import('../views/bofangqi')
    //   }

    //   ,{
    //     path:"/list3",
    //     name:"list3",
    //     component:()=>import('../views/list3.vue')
    //   },

    // ]
  }
  , {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "/userinfo",
    name: "userinfo",
    component: () => import("../views/userinfo")
  },
  {
    path: "/pinglun",
    name: "pinglun",
    component: () => import('../views/pinglun')
  }
];



const router = new VueRouter({
  routes,
});

export default router;
