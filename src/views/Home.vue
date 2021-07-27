<template> 
  <div class="aa">
    <div class=" na">
      <div class="nav row">
        <div class="col-sm-2 row">
          <img
            src="https://cn.vitejs.dev/logo.svg"
            alt=""
            width="50px"
            height="50px"
            class="col-sm-4"
          />
          <div class="col-sm-8" style="font-size: 30px; color: #fff">vite</div>
        </div>
        <div class="col-sm-5 mynav">
          <div class="rowe">
            <div class="col-sm-2 ff">
              
              发现音乐
              </div>
            <div class="col-sm-2 ff"><router-link :to='{path:"/mylist"}' tag="div" active-class="heig">我的音乐</router-link></div>
            <div class="col-sm-2 ff">歌手</div>
            <div class="col-sm-2 ff">歌单</div>
            <div class="col-sm-2 ff">排行</div>
          </div>
        </div>
        <div class="col-sm-3 nav_c">
    

       
        <musicSearch></musicSearch>




        
        </div>

        <div class="col-sm-2 row userlogin">
          <div class="row_3">
            <img
              src="https://cn.vitejs.dev/logo.svg"
              alt=""
              width="40px"
              height="40px"
            />

            <div class="dropdown">
              <el-dropdown>
                <el-button type="primary">
                  登录选项<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >
                    <div @click="textlogin">检查登录</div>
                    </el-dropdown-item>
                  <el-dropdown-item><router-link to="/login">登录</router-link></el-dropdown-item>
                  <el-dropdown-item>
                    <div @click="outlogin">
                       退出登录
                    </div>
                   
                    </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>


  <router-view>
    
  </router-view>

  </div>
</template>

<script>
import musicSearch from "./musicSearch";
import bangdan from './bangdan.vue'
export default {
  data() {
    return {
      input4: "",
    };
  },
  name: "Home",
  components: { musicSearch ,bangdan},
  methods: {
  textlogin(){
    
    this.$axios.get("/user/account").then((data)=>{
      
       console.log("登录信息",data.data.account);
       this.$axios
      .get("/user/level")
      .then((data) => {
        // console.log(data.data.data, "lv");
        // this.lv = data.data.data.level + data.data.data.progress;
             this.$notify({
          title: '成功',
          message: '已经登录',
          type: 'success',
           position: 'top-left'
        });
      })
      .catch((err) => {
        console.log("未登录");
             this.$notify({
          title: '警告',
          message: '未登录，部分功能无法使用，请登录',
          type: 'warning',
           position: 'top-left'
        });
      });

    })
  },
  outlogin(){
     this.$axios.get("/logout").then((result)=>{
       localStorage.removeItem("userid")
       console.log("退出登录",result);
     })
  }
  },
  created(){
    this.$axios.get("/user/account").then((data)=>{
       console.log("用户信息",data.data.account.id);
      localStorage.setItem("userid",data.data.account.id)
       
    })
  }

};
</script>



<style lang="less" scoped>
@import url("https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css");

//nav 激活时的样式
.heig{
//  background-color: #242424;
 height: 100%;
 animation: heig 2s forwards;
}
@keyframes heig {
  from {
     background-color: #545c63;
  }
  to{
     background-color: #242424;
  }
}



.aa {
  width: 100vw;

  // height: 55px;
  padding: 0 75px;
  line-height: 55px;

  .na {
    background-color: #545c63;
  border-bottom: 4px #C20C0C solid;
  color: #CCCCCC;

  }
}
.mynav {

  div {
    text-align: center;
  
  }
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
}
.bg-purple {
  background-color: #778ba6;

  border-radius: 4px;
  margin-top: 20px;
  box-shadow: 2px 2px 13px #333333;
  padding: 0 10px;

  min-height: 70vh;
  
}


</style>

