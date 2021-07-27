<template>
<transition >



  <div class="cc">
    <!-- <input type="text" v-model="username" />
    <br />
    <input type="password" v-model="passw" />

    <input type="text" placeholder="验证码" v-model="text" />
    <button @click="login">验证码登录</button>
    <button @click="gettext">获取验证码</button>
    <button @click="passlogin">密码登录</button>


    <button @click="isloginText"> 检测登录状态</button>
    <h1>{{this.uid}}</h1>
    <el-switch
  style="display: block"
  v-model="islogin"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="已登录"
  inactive-text="未登录" >
</el-switch> -->

    <div class="card container">
      <div class="row">
        <div class="col-lg-7 col-md-12">
          <div class="card-body">
            <button
              :class="{
                btn1: loginType === 'phone',
                btn2: loginType != 'phone',
              }"
              @click="change('phonelogin')"
            >
              <b>手机登录</b>
            </button>
            <button
              :class="{ btn1: loginType === 'pass', btn2: loginType != 'pass' }"
              @click="change('passlogin')"
            >
              <b>账号/邮箱 登录</b>
            </button>
            <!-- <button class="btn2" @click="change('youxlogin')"><b>邮箱登录</b></button> -->
          </div>

          <div class="card-body cbody1" v-if="loginType == 'phone'">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <select class="form-control">
                  <option value="+86">+86 中国大陆</option>
                  <option value="+1">+1 美国</option>
                  <option value="+1">+1 加拿大</option>
                </select>
              </div>

              <input
                type="text"
                class="form-control"
                placeholder="手机号"
                v-model="username"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="6位数字验证码"
                v-model="text"
              />
              <div class="input-group-append">
                <button class="btn btn3" @click="gettext">获取验证码</button>
              </div>
            </div>
          </div>

          <div class="card-bady cbody2" v-if="loginType == 'pass'">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="手机号/邮箱/用户名"
              v-model="username"
            />
            <input
              type="password"
              class="form-control mb-2"
              placeholder="密码"
              v-model="passw"
            />
            <img src="/img/eye_open.png " class="eye" style="width: 8%" />

            <a
              href=""
              class="card-link float-right mb-5"
              style="font-size: 10px"
              >忘记密码</a
            >
          </div>

          <div class="card-body">
            <el-button :plain="true" class="btn btn5 text-center" @click="login"
              >登录/注册</el-button
            >
            <!-- <button class="btn btn5 text-center" @click="login">登录/注册</button> -->
          </div>
        </div>
        <div class="col-lg-5 col-md-12 text-center">
          <div class="card-body">
            <img src="/img/phone.png" style="width: 10%" alt="微信扫码" />
            <span><b>微信扫一扫登录</b></span>
          </div>
          <div class="card-body">
            <img
              :src="erweima"
              class="card-img-top"
              style="width: 60%"
              alt="网易音乐"
            />
          </div>
        </div>
      </div>
      <div class="text-center card-footer">
        未注册手机验证后自动登录，注册即代表同意 <a href="">服务条款</a>和
        <a href="">隐私协议</a>
      </div>
    </div>
  <div class="fanhui">
    <el-button :plain="true" class="btn btn5 text-center " 
             @click="fanhui" >返回</el-button
            >
  </div>
   


  </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      passw: "",
      text: "",
      uid: "",
      islogin: false,
      loginType: "phone",
      erweima: "",
      erweimakey: "",
    };
  },
  methods: {
fanhui(){
  this.$router.push("/")
}
    ,
    login() {
      if (this.loginType == "phone") {
        this.$axios
          .get("/login/cellphone", {
            params: {
              phone: this.username,
              //   password: this.passw,
              captcha: this.text,
            },
          })
          .then((data) => {
            if (data.data.account != null) {
              this.$message({
                message: "登录成功",
                type: "success",
              });
            } else {
              this.$message.error("登录失败，请检查账号密码是否正确");
            }
          }).catch((err)=>{
         this.$message.error("登录失败，请检查账号密码是否正确");
          });
      } else if (this.loginType == "pass") {
        this.passlogin();
      }
    },
    gettext() {
      this.$axios.get("/captcha/sent", {
        params: {
          phone: this.username,
        },
      });
    },

    passlogin() {
      console.log("密码登录");
      this.$axios
        .get("/login/cellphone", {
          params: {
            phone: this.username,
            password: this.passw,
          },
        })
        .then((data) => {
          console.log("data:pass ", data.data);
          if (data.data.loginType == 1) {
            this.$message({
              message: "登录成功",
              type: "success",
            });

            this.islogin = true;
          } else {
            this.islogin = false;
            this.$message.error("登录失败，请检查账号密码是否正确");
          }
        });
    },
    isloginText() {
      this.$axios.get("/login/status").then((data) => {
        console.log(data);
        if (data.data.data.account) {
          alert("已经登录");
        } else {
          alert("未登录");
        }
      });
    },
    change(type) {
      if (type == "phonelogin") {
        this.loginType = "phone";
      } else if (type == "passlogin") {
        this.loginType = "pass";
      } else if (type == "youxlogin") {
        this.loginType = "youx";
      }
    },
  },
  beforeMount() {
    let that = this;
    this.$axios.get("/login/status").then((data) => {
      console.log(data);
      if (data.data.data.account) {
        //  alert("已经登录")
        that.islogin = true;
        // console.log("yjdl");
      } else {
        //  alert("未登录")
        that.islogin = false;
      }
    });
    this.$axios
      .get("/login/qr/key", {
        params: {
          timestamp: new Date().getTime(),
        },
      })
      .then((data) => {
        console.log(data, "22222");
        this.erweimakey = data.data.unikey;
      })
      .then(() => {
        this.$axios
          .get("/login/qr/create", {
            params: {
              key: this.erweimakey,
              qrimg: Math.random().toString(36).slice(-8),
              timestamp: new Date().getTime(),
            },
          })
          .then((data) => {
            console.log(data.data.data.qrimg);
            this.erweima = data.data.data.qrimg;
          });
      });
  },
};
</script>

<style lang="less" scoped>



@import url("https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css");
@import url("https://cdn.bootcdn.net/ajax/libs/reseter.css/2.0.0/reseter.min.css");

.fanhui {
  width: 50px;
  height: 25px;
  position: absolute;
  top: 50px;
  left: 50px;
}
.cc {
  // position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(/img/bg.png);
 
  background-size: 100%;
  display: inline-block;
  overflow: hidden;
  background-size: cover;
 
    // @include 'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css';

}
.container {
  width: 60%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 150px;
  margin-bottom: 150px;
}
@media only screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 150px;
  }
}
button {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  padding-bottom: 2px;
}

.btn1 {
  color: red;
}
.btn2 {
  color: #000;
}
.btn1,
.btn2 {
  width: 30%;
}
.btn2,
.btn5 {
  opacity: 1;
  height: 40px;
  line-height: 40px;
  padding: 0;
}
.btn3 {
  background-color: #42b983;
}
.btn5 {
  background-color: #42b983;
  width: 100%;
}
.cbody2 {
  // display: none;
  margin-top: 20px;
  padding: 0 30px;
}
.eye {
  position: absolute;
  bottom: 46%;
  right: 5%;
  z-index: 999;
}
.card-footer {
  background-color: #fff;
  font-size: 12px;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>