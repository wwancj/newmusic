<template>
  <div>
  <el-row>
  <el-col :span="8"><div v-if="$store.state.musics.length!=0"><bofangqi></bofangqi>  </div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><lyric></lyric></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">3333</div></el-col>
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
  components:{bofangqi,lyric}

}
</script>
<style lang="less" scoped>

</style>