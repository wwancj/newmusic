import axios from "axios";
import {lrc2Json} from "@/layout/lyric_json"
const instance = new axios.create({
    baseURL:process.env.VUE_APP_API_URL,
    timeout:10000
})


//  处理歌曲数据 返回 url
instance.interceptors.response.use(function(res){
   if(res.config.url=="/song/url"){
    //    console.log(res.data,"pppppppppp");
       return res.data.data[0].url
   }else if(res.config.url=="/lyric"){
       return res.data.lrc.lyric
   }else if(res.config.url=="/cloudsearch"&&res.status==200){
       return res.data.result.songs
   }
   return res
},function(){

})


//多功能搜索
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


//歌词获取
export let getlyric=async function getlyric(id){
    let res=await instance.get("/lyric",{
        params:{
            id
        }
    })
    return res
}