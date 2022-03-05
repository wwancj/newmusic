<template>
  <div id="a">
    <div v-for="(i,index) in musics"  :key="i.urlid" @click="star(i,index)">{{ i.name }}</div>    
  </div>
</template>

<script>
  export default {
    data () {
      return {
      
      }
    },
    methods: {
         star(i,index){
             let ii=[i]
             console.log(this.musics,"1111111")
             console.log(ii,"222222222222222222");
             this.$store.dispatch("findmusic",ii)
             this.$store.dispatch("muiscs",this.musics)
              this.$store.dispatch("currentIndex",index)
             this.$router.push('/bofangqi')
         }
    },
    props:{
       musics:{
            type:Array
        }
    },
    created(){
         this.musics.forEach((it)=>{
               this.$axios.get("/song/url",{params:{
                   id:it.urlid
               }}).then((data)=>{
                      
                    // console.log(data.data.data[0].url)
                    it.source=data.data.data[0].url
               })
            })
    }
  }
</script>

<style scoped>
#a{
    margin: 0;
    background: oldlace;
    height: 400px;
    overflow: auto;

    
}
@keyframes list{
  0%{
      height: 20px;
      line-height: 20px;
  }
  50%{
      height: 40px;
      line-height: 40px;
  }
  100%{
       height: 40px;
      line-height: 40px;
      background: orangered;
      color: powderblue;
  }
}
#a>div:hover{
   /* background: olivedrab; */
   cursor: pointer;
   animation: list 1s forwards;
}
</style>