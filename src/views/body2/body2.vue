<template>
  <div>
     <canvas id="particle-canvas"></canvas>
  </div>
</template>
<script>
import { animation } from "./index.js"
export default {
  name:"body2",
  mounted(){
    animation()
  }

}
</script>
<style lang="less" scoped>
#particle-canvas {
  width: 100%;
  height: 90vh;
  background: linear-gradient(to bottom, rgb(10, 10, 50) 0%,rgb(60, 10, 60) 100%);
  vertical-align: middle;
}
</style>