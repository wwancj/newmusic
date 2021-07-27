
<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/Home">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <!-- <router-link to='/my'>my</router-link> -->
    </div>
    <div id="vie">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
export default {};
</script>


<style scoped>
.v-enter {
  position: absolute;
  top: 0;
  left: 100%;

  /* transform: translateX(100%); */
}
.v-enter-to {
  position: absolute;
  top: 0;
  left: 0;
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
</style>
