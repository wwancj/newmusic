import axios  from "axios";
import {Message} from "element-ui";
const login_api  =new axios.create({
baseURL:process.env.VUE_APP_API_URL,
timeout:10000
})

export const api=login_api


login_api.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
login_api.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    if(response.data.code==502){
        Message({
            type:"error",
            message:response.data.msg
        })
    }else if(response.data.code==200){
       let str=response.data.cookie
        console.log(str,"cookie");
        // console.log(document,"document");
        Message({
            type:"success",
            message:(response.data.profile.nickname+'欢迎回来'),         
        })
    }
    return response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
//手机登录接口
export async function pwd_login(phone,password){
   let login_res=await login_api.get('/login/cellphone',{
       params:{
        phone:phone,
     
        password:password
       }
   })
   return login_res
}
// 验证码登录接口
export async function verify(phone,captcha){
     let verify_res=await login_api.get('/login/cellphone',{
         params:{
             phone,
             captcha
         }
     })

     return verify_res
}


export async function get_verify(phone){
   let verify=await login_api.get("/captcha/sent",{
       phone
   })
   return verify
}

export async function email_login(email,password){
   let email_res=await login_api.get("/login",{
       email,password
   })
   return email_res
}


export async function logout(){
    let logout=login_api.get("/logout")
    return logout
}

export async function islogin(){
    let islogin=login_api.get("/login/status")
    return islogin
}

// export default {
    
// }