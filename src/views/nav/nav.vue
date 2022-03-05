<template>
  <div class="na">
 

    <el-row>
      <el-col :span="4">
        <div class="icon">
          <i class="el-icon-arrow-left" style="color: aliceblue" @click="back"></i>
          <i class="el-icon-arrow-right" style="color: aliceblue"></i>
          <i class="el-icon-refresh-right" style="color: aliceblue"></i>
        </div>
      </el-col>

      <el-col :span="19">
        <div class="bb">
          <el-row>
            <el-col :span="2">
              <div class="navitem">音乐</div>
            </el-col>
            <el-col :span="2">
              <div class="navitem">mv</div>
            </el-col>
            <el-col :span="2">
              <div class="navitem">歌单</div>
            </el-col>
            <el-col :span="8">
              <div class="navitem ">
                <musicSearch></musicSearch>
              </div>
            </el-col>

            <el-col :span="10">
              <div class="navitem kk"></div>
            </el-col>
          
            <el-col :span="2">
              <div class="navitem ">
              
                <el-badge :value="1" class="item" type="primary">
                <i class="el-icon-message-solid" style="font-size: 30px; "></i>
 
               </el-badge>

              </div>
            </el-col>
            <el-col :span="2">
              <div class="navitem user" @click="login">
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
            </el-col>
          </el-row>

        </div></el-col
      >
    </el-row>

  
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
    back(){
      this.$router.go(-1)

    },
    login(){
      this.$router.push("/list3/body/login")
    },

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
    // alert(window.location.hash)
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
.el-badge__content,.is-fixed{
  // position: absolute;
  top:20px
}
.icon {
  margin: 20px auto;
  width: 100px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.kk::after {
  content: "";
  width: 100px;
}
.navitem {
  color: var(--inactive-color);
  text-align: center;
  // align-items: center;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // height: 100%;
  line-height: 60px;
}
.el-menu {
  background-color: var(--theme-bg-color);
  backdrop-filter: blur(20px);
  // width: 900px;
  // position: relative;
  // float: right;

  // right: 0;
}
.user {
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 100%;
}
.na {
  color: var(--theme-color);
  // display: flex;

  -webkit-border-top-left-radius: 1em;
  -webkit-border-top-right-radius: 1em;
  -webkit-border-bottom-right-radius: 0em;
  -webkit-border-bottom-left-radius: 0em;
  -moz-border-radius-topleft: 1em;
  -moz-border-radius-topright: 1em;
  -moz-border-radius-bottomright: 0em;
  -moz-border-radius-bottomleft: 0em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 0em;
  border-bottom-left-radius: 0em;
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
.bb > div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>