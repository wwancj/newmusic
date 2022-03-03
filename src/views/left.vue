<template>
  <div class="list">
    <div class="tuijian">
      <div class="main">推荐</div>
      <div class="item"><i class="el-icon-s-grid ico"></i>每日推荐</div>
      <div class="item"> <i class="el-icon-search ico"></i>歌曲搜索</div>
    </div>
    <div class="tuijian">
      <div class="main">我的音乐</div>
      <div class="item"> <i class="el-icon-star-off ico"></i>我的收藏</div>
      <div class="item"><i class="el-icon-headset ico"></i>我的电台</div>
      <div class="item"> <i class="el-icon-paperclip ico"></i>资源下载</div>
      <div class="item"> <i class="el-icon-cloudy ico"></i>音乐网盘</div>
      <div class="item"> <i class="el-icon-alarm-clock ico"></i>最近播放</div>
      <div class="item"> <i class="el-icon-tickets ico"></i>默认列表</div>
    </div>
    <div class="tuijian">
      <div class="main">我的歌单</div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
import bangdan from "./bangdan.vue";
export default {
  name:"myleft",
  components: { bangdan },
};
</script>

<style scoped lang="less">

.item{
   margin-left: 40px;
   height: 30px;
   color: rgb(160, 174, 187);
   font-weight: 100;
   
}
.ico{
  padding-right: 10px;
}
.main{
  margin-left: 20px;
  color: rgb(56, 77, 97);
}
.list>div{
  // margin-top:30px ;
  overflow: hidden;
  // justify-items: b;
  &>div{
height: 40px;
line-height: 40px;
  }
}
.list{
  padding-top: 30px;
  
}
</style>