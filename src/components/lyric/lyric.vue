<template>
<div class="ly">

  
    <div class="lyric-content" ref="lyric">
      <div class="lyric-item-wrapper" ref="con">
        <div :class="['lyric-item', {'active': activeIndex === index}]" v-for="(item,index) in lyricContent" :key="index" >
          {{item.content}}
        </div>
      </div>
 
    </div>

    <div id="pinlun">

      
    </div>

</div>
</template>
<script>
import {getlyric} from '@/api/music'
import {lrc2Json} from "@/layout/lyric_json"
// import BScroll from '@better-scroll/core'
export default {
data(){
    return{
      lyricContent:[],
       activeIndex: 0,
        scroll: null,
       
    }
},
created(){
   
 },
 watch:{
    "$store.state.currentTrack":function(newval){
      let vm=this
     let a=  async function (){
      let data = await getlyric(newval.id)
       vm.lyricContent=lrc2Json(data)
      //  console.log(vm.lyricContent);
       }
       a()
    },
    "$store.state.currentTime":function(newval){

          this.activeIndex = this.lyricContent.findIndex((item, index) => {
          return item.ms < newval && this.lyricContent[index + 1] ? this.lyricContent[index + 1].ms > newval : true
        })
      

    },
    "activeIndex":function (newVal){
        // this.scroll.scrollTo(0, -50 * this.activeIndex + 100,1000)
        console.log( this.activeIndex,9999999);
          this.$refs.con.style.transform=`translateY(${-50 * this.activeIndex+100}px)`
        
    }
 },
   mounted () {
    //  this.$refs.con.style.="-700px"
// this.$refs.lyric.style.top="100px"
//      console.log(this.$refs.con);
     // this.$refs.con.style.background="red"
    
      // this.scroll.scrollTo(0, 0,0)
  },
  created (){
    console.log( document.querySelector(".ly"));
   
  }

     
}
</script>
<style lang="less" scoped>

  #pinlun{
     height: 500px;
     width: 800px;
       box-shadow: 0.8rem 0.8rem 1.4rem var(--greyLight-2), -0.2rem -0.2rem 1.8rem var(--white);
    background: var(--greyLight-1);


  }
   .ly{
     position: absolute;
    //  top:300px;
     height: 300px;
    //  overflow: hidden;
     width: 800px;
     text-align: center;
    //  padding: 0 20px;
     
   }


  .lyric-content {
    position: relative;
    // top:0;
    height: 200px;
    overflow: hidden;
    background: var(--greyLight-1);
    border-radius: 8px;
    box-shadow: 0.8rem 0.8rem 1.4rem var(--greyLight-2), -0.2rem -0.2rem 1.8rem var(--white);
      .lyric-item-wrapper {
        // overflow: hidden;
          transition: all 0.5s ;
      .lyric-item {
        color: #999;
        height: 50px;
        transition: all 1s ;
        cursor: pointer;
        padding-left: 1em;
        font-size: 15px;
        line-height: 50px;
         animation-fill-mode:forwards;
        //  transform: translateY(-340px);
        &.active {
      font-family: myfont;

          font-size: 50px;
        line-height: 50px;
          color: var(--primary);
        }
      }
    }
    // .play-btn {
    //   position: absolute;
    //   right: 10px;
    //   top: 10px;
    //   color: #999;
    //   cursor: pointer;
    //   font-size: 40px;
    //   &:hover {
    //     color: #333;
    //   }
    // }
  }

</style>