<template>
  <el-table :data="$store.state.musics"
   style="width: 100%;min-height:500px;position: relative;
top:0;"
     v-loading="$store.state.loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
   >
    <el-table-column prop="name" label="歌曲" width="180" @click="te(name)">
    </el-table-column>
    <el-table-column prop="artist" label="歌手" width="180"> </el-table-column>
    <el-table-column prop="id" label="歌曲id"> </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleEdit(scope.$index, scope.row)"
          >播放</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index,"dddddddd");
      this.$store.dispatch("currentIndex", index);

      this.$store.dispatch("isstart","bfq")
      // this.$router.push({ path: "/bofangqi" });
      console.log(this.$route.path);
      // console.log(this.$store.state.isstart,"11111111111111star");
    },
    
  },
};
</script>

<style>

</style>