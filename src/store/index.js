import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import {getmusicurl} from "@/api/music"



axios.defaults.baseURL=process.env.VUE_APP_API_URL
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musiclist:[],
    musicids:[],
    // num:1111111111111,

    //搜索结果
    songs:[],
    musics:[],
    //全局 音乐索引
    cindex:0,
  
    //加载动画
    loading:false,
    isplay:false,
    currentTrack:null,
    currentTime:null,


    //下拉框开关

    con:false

  },
  actions: {
    findmusic(context,value){
     context.commit("baocunmusic",value)
    },

    musicids(context,value){
      // console.log(value,"vux 收到");
          context.commit("MIDS",value)
    },

    muiscs(context,value){
      context.commit("musics",value)
    },
    //
    currentIndex(context,value){
      context.commit("currentIndex",value)
    },

    isstart(context,value){
      context.commit("isstart",value)
      // console.log("bofangqi",value);
    },

    setloading(context,value){
        context.commit('setloading',value)
    },

    



    
   async songsfx(context,value){
     // 解构数据
    //  let arr=[]
    context.commit("musics_init")
     for(let item of value){
           let {name,id,al:{picUrl},ar:[ar],mv}=item                          
           let url=await getmusicurl(id)           
          //  arr.push({name,id,"cover":picUrl,"artist":ar.name,"source":url,mv})        
           context.commit("musics",{name,id,"cover":picUrl,"artist":ar.name,"source":url,mv})
        }
    }
     



  },

  mutations: {
    currentTrack(state,val){state.currentTrack=val},
    currentTime(state,val){state.currentTime=val},
  
    MIDS(state,value){
   state.musicids=value
   
    },
    GETSONG(state,value){
      state.songs=value
    },
    musics(state,value){
     state.musics.push(value)
    },
    currentIndex(state,value){
     state.cindex=value
    },
 
    setloading(state,value){
      state.loading=value
    },
    musics_init(state){
      state.musics=[]
    },
    con(state,val){
          state.con=val
    },

    //全局音乐开关
    isplay(){

    }
  },

  modules: {
  },
});
