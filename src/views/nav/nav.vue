<template>
  <div class="na">
    <!-- <router-link
                  :to="{ path: '/mylist' }"
                  tag="div"
                  active-class="heig"
                  >我的音乐</router-link
                > -->

    <el-row>
      <el-col :span="5">

        <div class="icon">
          <i class="el-icon-arrow-left" style="color:aliceblue"></i>
          <i class="el-icon-arrow-right" style="color:aliceblue"></i> 
          <i class="el-icon-refresh-right" style="color:aliceblue"></i>
        </div>
        
      </el-col>

      <el-col
      :span="19"
        >
        
        
        <div >
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="rgba(255, 255, 255, 0.15)"
          >
            <!-- <el-menu-item index="5">
          <el-dropdown>
            <el-button type="primary">
              登录选项<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div @click="textlogin">检查登录</div>
              </el-dropdown-item>
              <el-dropdown-item>
               
                <el-button type="text" @click="dialogFormVisible = true"
                  >立即登录</el-button
                >
              </el-dropdown-item>

              <el-dropdown-item >
                <div @click="outlogin">退出登录</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown></el-menu-item
        > -->
            <el-menu-item index="1" style="">处理中心</el-menu-item>

            <el-menu-item index="3"
              ><div class="item">333333</div></el-menu-item
            >
            <el-menu-item index="4">订单管理</el-menu-item>
            <el-menu-item index="6"> <musicSearch></musicSearch></el-menu-item>
          </el-menu></div
      ></el-col>
    </el-row>

    <loginform
      :dialogFormVisible="dialogFormVisible"
      @guanbi="loginfromshow"
    ></loginform>
  </div>
</template>
<script>
import musicSearch from "views/musicSearch";
import loginform from "../login/loginform.vue";
export default {
  name: "myNav",
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  components: { musicSearch, loginform },
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
  },
  mounted() {
    // console.log();
    // document.querySelectorAll(`[class="el-menu-item"]`).forEach((item)=>{
    //   item.addEventListener("mouseover",()=>{
    //     // alert(1122)
    //     item.style.backgroundColor="red"
    //   })
    // })
  },
};
</script>
<style lang="less" scoped>
.icon{
  margin: 20px auto;
  width: 100px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el-menu {
  background: transparent;
  // width: 900px;
  // position: relative;
  // float: right;

  // right: 0;
}
.na {
  // display: flex;

  -webkit-border-top-left-radius:1em;
-webkit-border-top-right-radius:1em;
-webkit-border-bottom-right-radius:0em;
-webkit-border-bottom-left-radius:0em;
-moz-border-radius-topleft:1em;
-moz-border-radius-topright:1em;
-moz-border-radius-bottomright:0em;
-moz-border-radius-bottomleft:0em;
border-top-left-radius:1em;
border-top-right-radius:1em;
border-bottom-right-radius:0em;
border-bottom-left-radius:0em;
overflow: hidden;
  flex-direction: row;
  align-content: center;
  // height: 60px;
  li {
    display: flex;
    align-items: center;

    :hover {
      background: transparent;
    }
  }
}
</style>