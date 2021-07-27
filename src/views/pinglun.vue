<template>
  <div id="w">
    <span>精彩评论</span>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <div class="pl" v-for="(item,index) in ite" :key="index">
      <el-row>
        <el-col :span="3">
          <div
            class="grid-content bg-purple touxiang"
            :style="{backgroundImage: `url(${item.user.avatarUrl})`}"
          ></div
        ></el-col>
        <el-col :span="21">
            <div
            class="grid-content bg-purple-light ss"
            
          >
            <div class="unickname" style="color:blue">{{item.user.nickname}}:</div>
            {{item.content}}
          </div>
          
            <el-row style="margin-top: 10px;">
        <el-col :span="19" >
          <div class="grid-content bg-purple" >
            {{$gettime(item.time)}}
          </div></el-col
        >
        <el-col :span="5">
          <div class="grid-content bg-purple" >
            <el-badge :value="item.likedCount" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
          </div></el-col
        >
      </el-row>


          </el-col>
      </el-row>
    
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {

    data () {
        return {
            ite:[]

        }
    },
  props: {
    uid: {
        default:1808492017,
        type:[String,Number]
    },
    type: {
        default:0,
        type:[String,Number]
    },    
  },
  methods: {},
  created() {
    this.$axios
      .get("/comment/hot", {
        params: {
          id: this.uid,
          limit: 40,
          type: 0,
        },
      })
      .then((data) => {
        console.log(data.data.hotComments);
        this.ite=data.data.hotComments
      });
  },
};
</script>

<style scoped lang="less">
#w{
  width: 1000px;
  margin: auto;
  font-size: 10px;
}

.touxiang {
  padding: 10px 10px;
  width: 80px;
  height: 80px;
  margin-left: 20px;
  background-size:cover 
}
.unickname {
  display: inline-block;
}
.ss {
  word-break: break-all;
}
</style>