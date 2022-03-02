<template>

   <el-dialog title="登录选项" :visible.sync="dialogFormVisible">
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
            
            
            </el-dialog>
     
</template>
<script>

import {pwd_login,email_login} from '@/api/axios.js'
export default {
name:"loginform"
,
data(){
return {
  
     form: {
        name: "登录",
        user:"18379166922",
        pws:"Wcj13755629453"
      },
      
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
            console.log(res,"333333333");

      }
    }
}
},
props:["dialogFormVisible"]
}
</script>
<style lang="less" scoped>

</style>