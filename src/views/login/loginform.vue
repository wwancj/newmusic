<template>


<div class="login">


  <el-empty description="登录后,体验更佳"></el-empty>
  <el-form :model="form">
                      <el-form-item label="手机号/网易邮箱" label-width="120px">
                        <el-input
                          v-model="form.user"
                          autocomplete="off"
                        ></el-input>
                      </el-form-item>
                 <el-form-item label="密码/验证码" label-width="120px">
                        <el-input
                          v-model="form.pws"
                          type="password"
                          autocomplete="off"
                        ></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button  @click="login"
                        >登录</el-button
                      >
                      <el-button
                        type="primary"
                        @click="toparent"
                        >确 定</el-button
                      >
                    </div>
</div>
   
                  
            
            
       
     
</template>
<script>

import {pwd_login,email_login,islogin} from '@/api/axios.js'
import { Message } from 'element-ui'
export default {
name:"loginform"
,
data(){
return {
  
     form: {
        name: "登录",
        user:"",
        pws:"",
        
      },
      show:true
      
}
},
methods:{
toparent(){
  this.$emit('guanbi',false)
},
async login(){
    if(/qq\.com?/.test(this.form.user)){
        // alert("邮箱")

     let res=await   email_login(this.form.user,this.form.pws)
    
     
    }else if(/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(this.form.user)){
      

      if(this.form.pws.length>=6){
       let res=await pwd_login(this.form.user,this.form.pws)
            // console.log(res,"333333333");

      }
    }
},
async ilogin(){
   const res= await islogin()
  //  console.log(res?.data?.id,55555555);
   if(res?.data?.id){
    //  alert(12)
    Message({
      type:"success",
      message:"欢迎回来"
    })
    
   }
  //  this.$router.push('/list3/body/musicls')
}

},

created(){
  this.ilogin()
}

}
</script>
<style lang="less" scoped>
  .login{
    width: 70%;
    margin: 0px auto;
  }
</style>