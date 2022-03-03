import axios from "axios";
const instance = new axios.create({
    baseURL:process.env.VUE_APP_API_URL,
    timeout:10000
})

export let cloudsearch=async function cloudsearch(keywords){
    let res=await instance.get("/cloudsearch",{
        params:{
            keywords
        }
    })
    return res
}


export let getmusicurl=async function geturl(id){
    let res=await instance.get("/song/url",{
        params:{
            id
        }
    })
    return res
}