<template>
  <div id="bangdan">
      <div v-for="(item,index) in banglist" :key="index" class="it" @click="bangid(item.id)">
          <img :src="item.coverImgUrl" alt="" width="70px" height="70px">
          <div>
              <div >{{item.name}}</div>
              <div>{{item.updateFrequency}}</div>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data () {
        return {
            banglist:[]
        }
    },
  created(){
      this.$axios.get("/toplist/detail",{

      }).then((data)=>{
        //   console.log("榜单",data.data.list);
          this.banglist=data.data.list.slice(0,7)
      })
  },
  methods:{
      bangid(id){
          this.$store.dispatch("setloading",true)
         this.$axios.get("/playlist/track/all",{
             params:{
                    id
             }
         }).then((data)=>{
             console.log("bangliast",data.data.songs);
            
          this.$store.dispatch('isstart',"list")
         this.$store.dispatch('songsfx',data.data.songs)


             
         })
      }
  }
}
</script>

<style scoped lang="less">
   #bangdan{
       width: 100%;
       &>div{
           height: 70px;
           
           div{
               div{
                    line-height:35px; 
                    padding-left: 10px;
               }
           }
           &:nth-child(odd){
background-color: #778BA6;
           }
            &:nth-child(even){
         background-color: #8196B1;
           }
       }
       .it{
           display: flex;
           flex-wrap: nowrap;
           margin: 10px 0;   
                 
       }
   }

</style>