<template>
  <div class="aa">
     <!-- 下拉框 开关 -->
    <div id="contor" @click="drawer = true">
      <div class="i">
        <i class="el-icon-arrow-down"> </i>
      </div>
    </div>

    <el-drawer
      title=""
      :visible.sync="$store.state.con"
      direction="ttb"
      size="100%"
    >
     <taskbar></taskbar>
    </el-drawer>

    <canvas id="particle-canvas"></canvas>
    <div id="con">
      <myNav></myNav>
      <el-divider></el-divider>
      <router-view></router-view>
      <!-- <mybody></mybody> -->
    </div>
  </div>
</template>

<script>



import myNav from "views/nav/nav";
// import musicSearch from "./musicSearch";
import bangdan from "./bangdan.vue";
import { animation } from "@/layout/main_anima.js";
import loginform from "./login/loginform.vue";

import bofangqi from 'views/bofangqi'
import mybody from "./body.vue";
import taskbar from "@/components/Taskbar/taskbar"
export default {
  data() {
    return {
      input4: "",
      drawer: false,
      innerDrawer: false,
    };
  },
  name: "Home",
  components: { taskbar, bangdan, loginform, myNav,bofangqi},
  methods: {
    textlogin() {
      this.$axios.get("/user/account").then((data) => {
        console.log("登录信息", data.data.account);
        this.$axios
          .get("/user/level")
          .then((data) => {
            // console.log(data.data.data, "lv");
            // this.lv = data.data.data.level + data.data.data.progress;
            this.$notify({
              title: "成功",
              message: "已经登录",
              type: "success",
              position: "top-left",
            });
          })
          .catch((err) => {
            console.log("未登录");
            this.$notify({
              title: "警告",
              message: "未登录，部分功能无法使用，请登录",
              type: "warning",
              position: "top-left",
            });
          });
      });
    },
    outlogin() {
      this.$axios.get("/logout").then((result) => {
        localStorage.removeItem("userid");
        console.log("退出登录", result);
      });
    },
    loginfromshow(res) {
      this.dialogFormVisible = res;
    },
    handleClose(done) {
    }
  },
  created() {
    this.$axios.get("/user/account").then((data) => {
      //  console.log("用户信息",data.data.account.id);
      // localStorage.setItem("userid",data.data.account.id)
    });
  },
  mounted() {
    animation();
  },
  beforeMount(){
    this.drawer=this.$store.con
    console.log(this.$store.state.con,"kkkkkkk");
  }
};
</script>



<style lang="less" scoped>
@keyframes imove {
  0% {
    top: 0px;
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-10px);
  }
}
.i {
  font-size: 50px;
  text-align: center;

  animation: imove linear 1s infinite;
}
#contor {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 50px;
  width: 120px;
  background-color: #84869b;
  border-top-left-radius: 0em;
  border-top-right-radius: 0em;
  border-bottom-right-radius: 9px;
  border-bottom-left-radius: 9px;
  padding-bottom: 10px;
}

#particle-canvas {
  width: 100%;
  height: 100vh;

  vertical-align: middle;
}
//nav 激活时的样式
.el-divider {
  margin: 0 0;
  background: rgba(113 119 144 / 25%);
}
.heig {
  //  background-color: #242424;
  height: 100%;
  animation: heig 2s forwards;
}
@keyframes heig {
  from {
    background-color: #545c63;
  }
  to {
    background-color: #242424;
  }
}

.aa {
  width: 100%;

  // height: 55px;
  position: relative;
  top: 0;
  // line-height: 55px;

  #con {
    -moz-box-shadow: -3px -5px 10px #f0fffb;
    -webkit-box-shadow: -3px -5px 10px #f0fffb;
    box-shadow: -3px -5px 10px #f0fffb;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 0em;
    border-bottom-left-radius: 0em;
    width: 85vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 90vh;
    overflow: hidden;
    margin-top: 10px;
    // margin-left:100px;

    // backdrop-filter: blur(20px);
    background-color: var(--theme-bg-color);
    backdrop-filter: blur(20px);
    //  background: rgba(255, 255, 255, .1);
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.3);
  }

  .na {
    // background-color: #545c63;
    // border-bottom: 4px #c20c0c solid;
    color: #000;

    //  backdrop-filter: blur(14px) saturate(150%);
    // background-color: rgba(255, 255, 255, 0.15);
  }
}
.mynav {
  div {
    text-align: center;
    //  backdrop-filter: blur(14px) saturate(150%);
    // background-color:rgba(255,255,255,0.15)
  }
  //  backdrop-filter: blur(14px) saturate(150%);
  //   background-color:rgba(255,255,255,0.15)
}
.nav_c {
  display: flex;
  align-items: center;
  .inp {
    height: 30px;
    width: 200px;
  }
}

.rowe {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.row_3 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  //  backdrop-filter: blur(14px) saturate(150%);
  //   background-color:rgba(255,255,255,0.15)
}
.bg-purple {
  // background-color: #778ba6;

  border-radius: 4px;
  margin-top: 20px;
  box-shadow: 2px 2px 13px #333333;
  padding: 0 10px;

  min-height: 70vh;
}
</style>

