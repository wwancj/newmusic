<template>
  <el-row :gutter="20">
    <el-col :span="5">
      <div class="grid-content bg-purple">
        <el-button type="primary" @click="dialogTableVisible = true"
          >音乐控制器</el-button
        >
         <!-- <el-button type="primary">主要按钮</el-button> -->

        <el-dialog title="播放控制器" :visible.sync="dialogTableVisible" >
          <el-collapse v-model="activeNames" @change="showlist">
            <el-collapse-item title="正在播放" name="1">
              <div v-if="$store.state.musics.length!=0">
                <a :href="$store.state.musics[$store.state.cindex].source"  target="_blank" >{{$store.state.musics[$store.state.cindex].name}} 下载</a>
               
              </div>
              <div>
                 {{$store.state.musics[$store.state.cindex]}}
              </div>
             
            </el-collapse-item>
            <el-collapse-item title="播放列表" name="2"  >
                <ul class="infinite-list" v-infinite-scroll="load" infinite-scroll-distance="10px" style="overflow:auto;max-height:100px" >
        <li v-for="i in count" class="infinite-list-item" :key="i" >{{ $store.state.musics[i-1].name }}</li>
             </ul>


            </el-collapse-item>
            <el-collapse-item title="控制" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <el-switch
                style="display: block"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费"
              >
              </el-switch>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>
                用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
              </div>
              <div>
                结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-dialog>
        <router-view name="left"> </router-view>
      </div>
    </el-col>

    <el-col :span="19">
      <div class="grid-content bg-purple" >
        <div style="padding: 10px 20px"></div>
          

        <transition name="right">
          <router-view name="right" v-show="$store.state.isstart == 'list'">
        </router-view>
        </transition>
        

        <transition name="bfq">
          <router-view name="bfq" v-show="$store.state.isstart == 'bfq'">
          </router-view>
        </transition>

        
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import musicSearch from "./music/index.vue";
import bangdan from "./bangdan.vue";
export default {
  // name:"body"
  data() {
    return {
      dialogTableVisible: false,
      value2: false,
      activeNames:["1"],
      count:6
    };
  },
  methods:{
    load(){
      if(this.count<this.$store.state.musics.length){
        if(this.$store.state.musics.length%2==0){
          console.log(this.$store.state.musics.length);
             this.count+=2
        }else{
          this.count+=1
        }
        
      }
      
    },
    showlist(){
     if(this.$store.state.musics.length>=6){
        this.count=6
    }else if(this.$store.state.musics.length<6){
        this.count=this.$store.state.musics.length
    }
    }
  
  },
  components: { bangdan },
  created(){
    if(this.$store.state.musics.length<=this.count){
        this.count=this.$store.state.musics.length
    }
  }
};
</script>

<style lang="less" scoped>
.rowe {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.row_3 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.bg-purple {
  background-color: #778ba6;

  border-radius: 4px;
  margin-top: 20px;
  box-shadow: 2px 2px 13px #333333;
  padding: 0 10px;

  min-height: 90vh;
  position: relative;
  top: 0;
}

.right-enter,.right-leave-to{
  opacity: 0;
}
.right-enter-to,.right-leave{
  opacity: 1;
}
.right-enter-active,.right-leave-active{
  transition: opacity 3s;
}


.bfq-enter,.bfq-leave-to{
  opacity: 0;
}

.bfq-enter-to,.bfq-leave{
  opacity: 1;
}
.bfq-enter-active,.bfq-leave-active{
  transition: opacity 3s;
}
</style>

