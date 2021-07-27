import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
// axios.defaults.baseURL="http://127.0.0.1/api"
axios.defaults.baseURL="http://wancj.top/api"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musiclist:[],
    musicids:[],
    num:1111111111111,
    songs:[],
    //全局音乐列表
    musics:[],
    //全局 音乐索引
    cindex:0,
    isstart:"list",
    //加载动画
    loading:false
  },
  actions: {
    findmusic(context,value){
     context.commit("baocunmusic",value)
    },

    musicids(context,value){
      console.log(value,"vux 收到");
          context.commit("MIDS",value)
    },

    muiscs(context,value){
      context.commit("musics",value)
    },
    currentIndex(context,value){
      context.commit("currentIndex",value)
    },

    isstart(context,value){
      context.commit("isstart",value)
      console.log("bofangqi",value);
    },

    setloading(context,value){
        context.commit('setloading',value)
    },

     // id 分析器
    //  async musicfx(context,value){
    //     console.log(value,"vuex 分析器");
    //     for(let item of value){
    //        axios.get("/song/url",{params:{
    //          id:item.id
    //        }}).then((data)=>{
    //         //  console.log(data.data.data);
    //          let [{url}]=data.data.data
    //         //  console.log(url);
    //          item.source=url
    //          item.url=""
    //          item.favorited=false
    //        })
    //     }
    //     console.log(value);
    //  },
    


    // 这个方法需要传入 一个 songs 数组
   async songsfx(context,value){
      let arr=[]            
      for(let item of value){
         let {name,id,al:{picUrl},ar:[ar]}=item               
         arr.push({name,id,"cover":picUrl,"artist":ar.name})
      }
      for(let item of arr){
      await axios.get("/song/url",{params:{
          id:item.id
        }}).then((data)=>{
         //  console.log(data.data.data);
          let [{url}]=data.data.data
         //  console.log(url);
          item.source=url
          item.url=""
          item.favorited=false
        })
     }
     console.log(arr,"song分析器111111111111111111111111");
     context.commit("musics",arr)
     context.commit("setloading",false)
    }
     



  },

  mutations: {
    baocunmusic(state,value){
        state.musiclist=value
    },
  
    MIDS(state,value){
   state.musicids=value
   
    },
    GETSONG(state,value){
      state.songs=value
    },
    musics(state,value){
     state.musics=value
    },
    currentIndex(state,value){
     state.cindex=value
    },
    isstart(state,value){
      state.isstart=value
    },
    setloading(state,value){
      state.loading=value
    }
  },

  modules: {
  },
});
