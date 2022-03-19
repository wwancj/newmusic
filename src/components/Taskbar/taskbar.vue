<template>
  <div id="taskbar">
<el-row>
  <el-col :span="8"><div v-if="$store.state.musics.length!=0"><bofangqi></bofangqi>  </div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple-light"><lyric></lyric></div></el-col>
 
</el-row>

         
  </div>
</template>
<script>
import lyric from '../lyric/lyric.vue'
import bofangqi from 'views/bofangqi'
import Lyric from '../lyric/lyric.vue'
export default {
    name:"taskbar",
    data(){
        return {
         
        }
    },
  components:{bofangqi,lyric},
  created(){
    console.log(document.querySelector(".el-drawer__header").style.background="#E4EBF5");
    document.querySelector(".el-drawer__header").style.marginBottom="0"
    
  }

}
</script>
<style lang="less" scoped>
 #taskbar{
    background: var(--greyLight-1);
   padding: 20px 80px;
   overflow: hidden;
   
   height: 100%;
 }
 
</style>