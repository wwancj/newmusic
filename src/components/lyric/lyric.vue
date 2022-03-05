<template>
<div>
   <div class="lyric">
  
    <div class="lyric-content" ref="lyric">
      <div class="lyric-item-wrapper">
        <div :class="['lyric-item', {'active': activeIndex === index}]" v-for="(item,index) in lyricContent" :key="index" >
          {{item.content}}
        </div>
      </div>
      <div class="play-btn" ></div>
    </div>
  </div>
</div>
</template>
<script>
import {getlyric} from '@/api/music'
import {lrc2Json} from "@/layout/lyric_json"
import BScroll from '@better-scroll/core'
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
       console.log(vm.lyricContent);
       }
       a()
    },
    "$store.state.currentTime":function(newval){
    //    if(newval){
          this.activeIndex = this.lyricContent.findIndex((item, index) => {
          return item.ms < newval && this.lyricContent[index + 1] ? this.lyricContent[index + 1].ms > newval : true
        })

        // function anima(){
            this.scroll.scrollTo(0, -27 * this.activeIndex + 54,500)
    //         requestAnimationFrame( anima())
    //     }

      //防抖不能删除
      
        console.log(this.activeIndex);
       
    //    anima()
    }
 },
   mounted () {
      this.scroll = new BScroll(this.$refs.lyric)
      this.scroll.scrollTo(0, 540,50)
  }

     
}
</script>
<style lang="less" scoped>
.lyric {
  .lyric-content {
    position: relative;
    height: 108px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    user-select: none;
    .lyric-item-wrapper {
        overflow: hidden;
      .lyric-item {
        color: #999;
        height: 27px;
        transition: all 1s;
        cursor: pointer;
        padding-left: 1em;
        &.active {
          color: #333;
        }
      }
    }
    .play-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #999;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        color: #333;
      }
    }
  }
}
</style>