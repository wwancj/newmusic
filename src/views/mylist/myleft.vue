<template>
    <div id="myleft">

 <el-row class="tac">
  <el-col :span="24">
    
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened=true
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <span>收藏的歌单</span>
        </template>
        <el-menu-item-group>
          
          <el-menu-item  v-for="(item,index) in mylist" :key="index" :index="index+'ww'" @click="showlist(item.id)">{{item.name}}</el-menu-item>
        </el-menu-item-group>
       
      
       </el-submenu>
          <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-video-camera-solid"></i>
          <span>收藏的MV</span>
        </template>
        <el-menu-item-group>
          
          <el-menu-item  v-for="(item,index) in mvlist" :key="index" :index="index+'ww'">
            
            <div @click="playmv(item.vid)">
              {{item.name}}
            </div>
            </el-menu-item>
         

          
        </el-menu-item-group>
       
      
       </el-submenu>
    
    </el-menu>
  </el-col>

</el-row>
    </div>
</template>

<script>
export default {

    data () {
        return {
            mylist:[],
            mvlist:[]
        }
    },
  created(){
      let id=localStorage.getItem("userid")
      this.$axios.get("/user/playlist",{params:{
          "uid":id
      }}).then((data)=>{
        // console.log(data,"2222222");
        data.data.playlist.forEach((item)=>{
             this.mylist.push({"imgurl":item.coverImgUrl,"id":item.id,"name":item.name})

        })
        console.log(this.mylist);
      })


      this.$axios.get("/mv/sublist").then((result)=>{
        // console.log("mv",result);
      result.data.data.forEach((item,index)=>{
        this.mvlist.push({"name":item.title,"vid":item.vid})
        
      })

      })
  },
  methods:{
      handleOpen(){

      },
      handleClose(){

      },
      playmv(id){
this.$axios.get("/video/url",{params:{
  "id":id
}}).then((mv)=>{
   console.log("mv2222",mv.data.urls[0].url);
})
      },
      showlist(id){

        this.$store.dispatch("setloading",true)
      this.$axios.get("/playlist/track/all",{
             params:{
                    id
             }
         }).then((data)=>{
             console.log("bangliast",data.data.songs);
            
          
           this.$store.dispatch('songsfx',data.data.songs)
            
            //  this.$router.push({ path: "/list3" });
             
         })
    },
  }
}
</script>

<style lang="less" scoped>
 .ele{
     min-width: 100%;
     display: inline-block;
 }
 .el-submenu,.el-menu-item {
      min-width: none; 
 height: auto; 
      div{
        // height: 40px;
        white-space: normal;
        white-space: pre-wrap; 
     line-height: 20px;
      padding: 0;
      min-height: 60px;
      
      }
     
 }

</style>