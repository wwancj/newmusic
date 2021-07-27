<template>
  <div id="userI">
    <main>
      <section class="glass">
        <div class="dashboard">
          <div class="user">
            <div>
              <el-progress
                type="circle"
                :percentage="lv * 10"
                style="z-index: 999"
                id="dd"
              ></el-progress>
              <img
                :src="user.avatarUrl"
                alt=""
                style="width: 126px; height: 126px"
                id="im"
              />
            </div>

            <h3>{{ user.nickname }}</h3>
            <p>id:{{ user.userId }}</p>
          </div>
          <div class="links">
            <div class="link">
              <img src="" alt="" />
              <h2>账号创建时间{{ firsttime }}</h2>
            </div>
            <div class="link">
              <img src="" alt="" />
              <h2>生日{{ birthday }}</h2>
            </div>
            <div class="link">
              <img src="" alt="" />
              <h2>上次登录时间{{ lasttime }}</h2>
            </div>
            <div class="link">
              <img src="" alt="" />
              <h2>Library</h2>
            </div>
          </div>
          <div class="pro">
            <!-- <h2>收藏歌单</h2> -->
            <img src="" alt="" />
          </div>
        </div>
        <div class="games">
          <div class="status">
            <h1 style="font-family: cursive">收藏歌单</h1>
            <!-- <input type="text" /> -->
            <div class="soll"></div>
          </div>

          <ul
            class="cards infinite-list"
            v-infinite-scroll="lo"
            style="overflow: auto"
            infinite-scroll-delay="300"
            infinite-scroll-immediate="false"
          >
            <li
              class="cardl infinite-list-item"
              v-for="i in musiclist"
              :key="i.id"
              @click="showlist(i.id)"
            >
              <img :src="i.coverImgUrl" alt="" width="80px" height="80px" />
              <div class="card-info" style="width: 150px">
                <h2>{{ i.name }}</h2>
                <p>{{ i.trackCount }}首</p>
                <!-- <div class="progress"></div> -->
              </div>
              <h2 class="percentage">60%</h2>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <!-- <div class="circle1"></div>
    <div class="circle2"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        avatarUrl:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.EYFIRH8LQFdkafmC-wAeBwHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        nickname: "",
        userId: "",
      },
      //   firsttime:this.time(this.user.createTime)
      firsttime: "",
      birthday: "",
      lasttime: "",
      lv: "",
      count: 6,
      musiclist: [],
    };
  },

  beforeMount() {
    let that = this;
    this.$axios
      .get("/user/account")
      .then((data) => {
        console.log("data:account ", data.data);

        if(data.data.account==null){
           this.user =  {
          avatarUrl:
            "https://tse4-mm.cn.bing.net/th/id/OIP-C.EYFIRH8LQFdkafmC-wAeBwHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          nickname: "",
          userId: "",
        };

        }else {
          this.user=data.data.profile
              this.firsttime = this.time(data.data.profile.createTime) || "";
          this.birthday = this.time(data.data.profile.birthday) || "";
          this.lasttime = this.time(data.data.profile.lastLoginTime) || "";
        }
       
        // try {
        //   this.firsttime = this.time(data.data.profile.createTime) || "";
        //   this.birthday = this.time(data.data.profile.birthday) || "";
        //   this.lasttime = this.time(data.data.profile.lastLoginTime) || "";
        // } catch (error) {
        //   console.log("未登录：", error.message);
        // }
      })
      .then(() => {
        this.$axios
          .get("/user/playlist", {
            params: {
              uid: that.user.userId,
            },
          })
          .then((data) => {
            if (data.data.code != 400) {
              console.log(data.data.playlist, "ml");
              this.count = data.data.playlist.length || 0;
              this.musiclist = data.data.playlist;
             
            }

            // console.log(that.user.userId);
          });
      });

    this.$axios
      .get("/user/level")
      .then((data) => {
        console.log(data.data.data, "lv");
        this.lv = data.data.data.level + data.data.data.progress;
      })
      .catch((err) => {
        console.log("未登录");
      });
  },
  methods: {
    time(nS) {
      return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, " ");
    },
    lo() {
      this.count += 2;
      // alert("ss")
    },
    showlist(id){
      this.$axios.get("/playlist/track/all",{
             params:{
                    id
             }
         }).then((data)=>{
             console.log("bangliast",data.data.songs);
            
          
           this.$store.dispatch('songsfx',data.data.songs)

             this.$router.push({ path: "/list3" });
             
         })
    },
  
  },
};
</script>

<style lang="less" scoped>

#userI{
  // width: 100vw;
  // position:absolute;
  // left: 0;
  // top:0
  
  main{
    width: 100vw;
  position:absolute;
  }
}
* {
  padding: 0;
}
.soll {
  width: 270px;
  height: 30px;
  border-radius: 20px;
  background-color: ghostwhite;
}
::-webkit-scrollbar {
  display: none;
}
#im {
  position: absolute;
  // top: 10px;
  // left: 100px;
  top: 0;
  left: 0;
  border-radius: 100%;
  padding: 5px;
}

.user {
  position: relative;
  div {
    padding-bottom: 15px;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  height: auto;
  padding-right: 20px;
}

h1 {
  color: #426696;
  font-weight: 600;
  font-size: 3rem;
  opacity: 0.8;
}
h2,
p {
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
}

h3 {
  color: #426696;
  font-weight: 600;
  opacity: 0.8;
}

main {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass {
  background: white;
  min-height: 80vh;
  // max-height: 90vh;
  height: 90vh;
  overflow: auto;
  width: 60%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
}
.circle1,
.circle2 {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 20rem;
  width: 20rem;
  position: absolute;
  border-radius: 50%;
}

.circle1 {
  top: 5%;
  right: 15%;
}
.circle2 {
  bottom: 5%;
  left: 10%;
}
.dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
}
.link {
  display: flex;
  margin: 2rem 0rem;
  padding: 1rem 1rem;
  align-items: center;
}
.link h2 {
  padding: 0rem 2rem;
}

.games {
  flex: 2;
}

.pro {
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  border-radius: 2rem;
  color: white;
  padding: 1rem;
  position: relative;
}

.pro img {
  position: absolute;
  top: -10%;
  right: 10%;
}
.pro h2 {
  width: 40%;
  color: white;
  font-weight: 600;
}

/* GAMES */
.status {
  margin-bottom: 3rem;
}

.status input {
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border: none;
  width: 50%;
  padding: 0.5rem;
  border-radius: 2rem;
}

.games {
  margin: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.cardl {
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  margin: 2rem 0rem;
  padding: 2rem;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  justify-content: space-between;
}

.progress {
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  width: 100%;
  height: 25%;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}
.progress::after {
  content: "";
  width: 100%;
  height: 100%;
  background: rgb(236, 236, 236);
  position: absolute;
  left: 60%;
}
.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.percentage {
  font-weight: bold;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);

  -webkit-text-fill-color: transparent;
}
h2 {
  font-size: 15px;
}
</style>