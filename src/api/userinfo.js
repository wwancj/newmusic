import axios  from "axios";
const instance1 = new axios.create({
    baseURL:process.env.VUE_APP_API_URL,
    timeout:10000
})


export let getuserinfo=async ()=>{
    const {data}=await instance1.get("/user/account")
     return data.profile
}
