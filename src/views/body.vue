<template>
  <el-row >
    <el-col :span="4">
      <div class="grid-content bg-purple left">
        <!-- <el-button type="primary" @click="dialogTableVisible = true"
          >音乐控制器</el-button
        > -->
         <!-- <el-button type="primary">主要按钮</el-button> -->

       
        <!-- <router-view name="left"> </router-view> -->
        <myleft></myleft>
      </div>
    </el-col>

    <el-col :span="20">
      <div class="grid-content bg-purple" >
        <div style="padding: 10px 20px"></div>
       <router-view >
          </router-view>
        
      </div>
    </el-col>
  </el-row>
</template>

<script>

import {islogin} from "@/api/axios.js"
import bangdan from "./bangdan.vue";
import myleft from "./left.vue";
export default {
  // name:"body"
  data() {
    return {
    
 
    };
  },
  methods:{
   async checklogin(){
     let data= await islogin()
    
    }
  },
  components: { bangdan,myleft },
  created(){

    
   this.checklogin()
   
  }

  
};
</script>

<style lang="less" scoped>
.left{
  // border-right:;
   border-right-style: solid ;
 
border-right-color:rgba(118, 120, 121, 0.25);
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
  
 
  padding: 0 10px;

  min-height: 90vh;
  // position: relative;
  // top: 0;
}

.right-enter,.right-leave-to{
  opacity: 0;
}
.right-enter-to,.right-leave{
  opacity: 1;
}
.right-enter-active,.right-leave-active{
  transition: opacity 3s;
}


.bfq-enter,.bfq-leave-to{
  opacity: 0;
}

.bfq-enter-to,.bfq-leave{
  opacity: 1;
}
.bfq-enter-active,.bfq-leave-active{
  transition: opacity 3s;
}
</style>

