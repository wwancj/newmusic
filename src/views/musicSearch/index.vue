<template>
  <el-autocomplete
    class="inline-input"
    v-model="musicname"
    :fetch-suggestions="querySearch"
    placeholder="请输入内容"
   
  >
    <i
      slot="prefix"
      class="el-input__icon el-icon-search"
      id="search"
      ref="search"
      @click="sear"
    ></i>
  </el-autocomplete>
</template>

<script>

import {cloudsearch} from "@/api/music.js"
export default {
  components: {},
  data() {
    return {
      searchlist: [],
      fullscreenLoading: false,
      musicname: "",
      musiclist: [],
      musicidlist: [],
      urlid: "aaaaa",
    };
  },
  name: "music",
  methods: {
    querySearch(queryString, cb) {
      cb(this.searchlist);
    },
    async sear() {
      // alert(1223)
    let data= await cloudsearch(this.musicname)
    this.$store.dispatch("songsfx", data);
      // if (this.musicname != "") {
      //   this.$store.dispatch("setloading", true);
      //   this.musicidlist = [];
      //   this.musiclist = [];
      //   let that = this;
      //   this.$axios
      //     .get("/cloudsearch", {
      //       params: {
      //         keywords: this.musicname,
      //       },
      //     })
      //     .then((data) => {
      //       let a = 0;
      //       let music = data.data.result.songs;

      //       this.$store.dispatch("songsfx", music);

      //       this.$store.dispatch("isstart", "list");
      //     },(error)=>{
      //      this.$notify({
      //         title: "警告",
      //         message: "网络出现错误,请检查网络",
      //         type: "warning",
      //         position: "top-left",
      //       });
      //     })
      // } else {
      //   this.$notify({
      //     // title: '自定义位置',
      //     message: "内容不能为空",
      //     position: "top-left",
      //     type: "warning",
      //   });
      // }


    },
    //
  },

  watch: {
    musiclist: {
      deep: true,
      handler(newval, oldval) {
        if (this.musiclist.length >= 10) {
          this.fullscreenLoading = false;
        }
      },
    },
  },

  created() {
    this.$axios.get("/search/hot").then((result) => {
      let hots = result.data.result.hots;

      hots.forEach((item) => {
        this.searchlist.push({ value: item.first });
      });
      // console.log(this.searchlist);
      // console.log("搜索热门推荐", result.data.result.hots);
    });




  },
  mounted() {
    let that = this;
    document
      .querySelector('input[placeholder="请输入内容"]')
      .addEventListener("keydown", function (e) {
     
        if (e.key == "Enter") {
          that.sear();
        }
      });

      let input=document.querySelector(".el-input__inner")
      input.style.backgroundColor="rgba(16 18 27 / 40%) "
      input.style.outline="none"
      input.style.border="none"
  },


    
};
</script>

<style scoped lang="less">
#music {
  padding: 0;
  #search {
    cursor: pointer;
  }
}


.el-input__inner{
  background-color:rgba(16 18 27 / 40%) ;
}
</style>