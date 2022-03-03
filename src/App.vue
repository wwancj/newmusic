
<template>
  <div id="app" >
   
    <div id="vie">
    
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import imgurl from '@/assets/back.jpg'

export default {
data(){
  return {
    //  imgUrl:require('@/assets/back.jpg')
    imgurl
  }
  
},

};
// url(https://wallpapershome.com/images/wallpapers/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg)
</script>


<style >

#app{
  background-image: url("~@/assets/back.jpg");
  background-size: cover;
}
.v-enter {
  position: absolute;
  top: 0;
  left: 100%;

  /* transform: translateX(100%); */
}
.v-enter-to {
  position: absolute;
  top: 0px;
  left: 0px;
}
.v-enter-active {
  transition: left 0.7s;
}
.v-leave {
  position: absolute;
  top: 0;
  left: 0;
}
.v-leave-to {
  position: absolute;
  top: 0;
  left: -100%;
}
.v-leave-active {
  transition: left 0.7s;
}



  *::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
 


  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: var(--scrollbar-bg);
    border-radius: 10px;
}




:root {
    --theme-bg-color: rgba(16 18 27 / 40%);
    --border-color: rgba(113 119 144 / 25%);
    --theme-color: #f9fafb;
    --inactive-color: rgb(113 119 144 / 78%);
    --body-font: "Poppins", sans-serif;
    --hover-menu-bg: rgba(12 15 25 / 30%);
    --content-title-color: #999ba5;
    --content-bg: rgb(146 151 179 / 13%);
    --button-inactive: rgb(249 250 251 / 55%);
    --dropdown-bg: #21242d;
    --dropdown-hover: rgb(42 46 60);
    --popup-bg: rgb(22 25 37);
    --search-bg: #14162b;
    --overlay-bg: rgba(36, 39, 59, 0.3);
    --scrollbar-bg: rgb(1 2 3 / 40%);
}

</style>
