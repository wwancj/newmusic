import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';




Vue.use(VueRouter);



let mylist = {
  path: "/mylist",
  name: "mylist",
  components: {
    left: () => import("../views/mylist/myleft"),
    right: () => import('../views/mylist/myright.vue'),
    bfq: () => import("../views/bofangqi")
  }
}

let body={
  path: "/body",
  name: "body",
  redirect: "./list3",
  component: () => import("../views/body"),
  children: [{
    path: "/bofangqi",
    name: "bofangqi",
    components: {
      left: () => import('../views/left.vue'),
      myleft: () => import('../views/mylist/myleft.vue'),
      right: () => import("../views/bofangqi")
    }
  }

    , {
    path: "/list3",
    name: "list3",
    components: {
      right: () => import('../views/list3.vue'),
      left: () => import("../views/left.vue"),
      bfq: () => import("../views/bofangqi")
    }
  },
    mylist

  ]

}

let body1={
    path:"/body2",
    name:"body2",
    component:()=>import("@/views/body2/body2")
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "./body",
    children: [body,body1]

  }
  , 
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
