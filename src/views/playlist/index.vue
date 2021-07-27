<template>
  <div id="content">
        <div id="playl">
            <div>华语</div>
            <div>流行</div>
            <div>摇滚</div>
            <div>民谣</div>
            <div>电子</div>
            <div>轻音乐</div>
            <div>综艺</div>
            <div>影视原声</div>
        </div>
        <div id="playa">
            <div v-for="item in playlist" :key="item.coverImgId">
                <img :src="item.coverImgUrl" alt="">
                <div class="text" v-text="item.copywriter">
                
                </div>
            </div>
          
            
        </div>
  </div>
</template>

<script>
export default {
   name:"playlist",
   data(){
       return{
           playlist:[]
       }
   },
   created() {
       this.$axios.get("/top/playlist/highquality",{params:{
           cat:"华语",
           limit:36,
           

       }}).then((data)=>{
    //   console.log(data.data.playlists)
this.playlist=data.data.playlists
       }).catch((data)=>{
console.log("获取歌单出现问题")
       })
   }
}
</script>

<style>
#content{
     position: relative;
    width: 95%;
    /* height: 580px; */
    margin: 50px auto;
    overflow: auto;
   
}
#playl{


position: fixed;
top:10;
right: 150px;
display: flex;
justify-items: center;
transform: translateY(-20px);
}
#playl>div{
    width: 60px;

   
   text-align: center;
    font-size: 12px;
}
#playa{
    display: flex;
    margin: 30px;
  flex-wrap: wrap;
  justify-content: space-around;

}
#playa>div{
    width:210px ;
    height:250px ;
 
    margin: 10px 20px;
    border-radius: 10px;
    overflow: hidden;

}
#playa>div>img{
    border-radius: 10px;
    width: 210px;
    height: 200px;
}
#playa>div>.text{
width: 200px;
word-wrap: break-word;
word-break: break-all;
white-space: normal;
color: coral;
}
</style>