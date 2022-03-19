<template>
  <div class="listl">
    <div id="fle"> 搜索结果</div>
    <div id="bt">
     
      <div class="content">

        <transition-group>
          <div v-for="(item,index) in $store.state.musics" :key="item.id" class="ll">
            <el-row >

          <el-col :span="5"><div class="mname">{{item.name}}</div></el-col>
          <el-col :span="5"><div class="mname">{{item.artist}}</div></el-col>
          <el-col :span="9">
          <div v-if="item.mv!='0'"><i class="el-icon-video-camera-solid"></i></div>
          <div v-else-if="item.mv=='0'"><i class="el-icon-error"></i></div>
          </el-col>
          <el-col :span="5"><div class="play"   @click="handleEdit(index)"><i class="el-icon-video-play" ></i></div></el-col>
        </el-row>
        </div></transition-group>
        
      
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "list3",
  data() {
    return {};
  },
  methods: {
    handleEdit(index ) {

  

      this.$store.dispatch("currentIndex", index);
      this.$store.commit('con', true)
      // this.$store.dispatch("isstart", "bfq");
      // this.$router.push("/list3/body/play");
      // console.log(this.$route.path);
      // console.log(this.$store.state.isstart,"11111111111111star");
    },
   
  },
};
</script>

<style scoped lang="less">
.play{
  font-size: 2rem;
}
.mname{
  padding-left: 10px;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
white-space: nowrap;
  // overflow: hidden;
}
.ll{
  height: 40px;
  line-height: 40px;
}
#bt {
  height: 600px;
  overflow: scroll
}
#fle {
  position: relative;
  top: 0px;
}
.content {
  width: 100%;
  height: 400px;

  background-color: rgba(118, 120, 121, 0.25);
color: aliceblue;
font-weight:100;
-webkit-border-top-left-radius:5px;
-webkit-border-top-right-radius:5px;
-webkit-border-bottom-right-radius:5px;
-webkit-border-bottom-left-radius:5px;
-moz-border-radius-topleft:5px;
-moz-border-radius-topright:5px;
-moz-border-radius-bottomright:5px;
-moz-border-radius-bottomleft:5px;
border-top-left-radius:10px;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
border-bottom-left-radius:10px;
  overflow: scroll;
  &>span>div:hover{
    background-color: rgba(14, 69, 97, 0.25);
  }
}
// .content::after {
//   content: ""; /* 添加内容 */
//   clear: both; /* 清楚两侧浮动 */
//   display: block; /* 转换元素类型为块元素 */
//   height: 890px;
//   overflow: hidden; /* 溢出隐藏属性 */
//   visibility: hidden; /* 隐藏属性 */
// }
.listl {
  height: 700px;
  // overflow: scroll;
  position: relative;
  padding: 20px;
}

.v-enter {
  position: relative;
  top: 0;
  left: 100%;

  /* transform: translateX(100%); */
}
.v-enter-to {
  position: relative;
  top: 0px;
  left: 0px;
}
.v-enter-active {
  transition: left 1.7s;
}
.v-leave {
  position: relative;
  top: 0;
  left: 0;
}
.v-leave-to {
  position: relative;
  top: 0;
  left: -100%;
}
.v-leave-active {
  transition: left 0.7s;
}
</style>