<template>
  <div id="bj">
    
        <canvas ref="canvas"> </canvas> 
        <div class="songs">
        
             <!-- {{$store.state.songs}} -->
       
               <div class="song">
                 <!-- <i class="el-icon-video-play" v-if="play" @click="play"></i>  <i class="el-icon-video-pause" v-if="!play" @click="play"></i> -->
                 <span class="sname">你的名字</span> <i class="el-icon-circle-plus-outline add"></i> <i class="el-icon-video-camera-solid mv"></i><span>房东的猫</span>
               </div>
               <div class="song">
                 <!-- <i class="el-icon-video-play" v-if="play" @click="play"></i>  <i class="el-icon-video-pause" v-if="!play" @click="play"></i> -->
                 <span class="sname">你的名字</span> <i class="el-icon-circle-plus-outline add"></i> <i class="el-icon-video-camera-solid mv"></i><span>房东的猫</span>
               </div>
          
          
        </div>
  </div>
</template>

<script>
// import {cance} from "./text.js"
export default {
    name:"texiao",
    data(){
return{
  isplay:false
}
    },
methods: {
play(){

    return !this.isplay
},

},
    computed: {
  
    }
    ,
    mounted(){
         var canvas=this.$refs.canvas
        //  console.log( canvas)
              var ctx = canvas.getContext('2d')
    //   canvas.width = window.innerWidth;
          canvas.width = 1260;
    //   canvas.height = window.innerHeight;
       canvas.height =660;
      ctx.lineWidth = .3;
      ctx.strokeStyle = (new Color(150)).style;
    
      var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
      };
    
      var dots = {
        nb: 550,
        distance: 50,
        d_radius: 100,
        array: []
      };
    
      function colorValue(min) {
        return Math.floor(Math.random() * 255 + min);
      }
      
      function createColorStyle(r,g,b) {
        return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
      }
      
      function mixComponents(comp1, weight1, comp2, weight2) {
        return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
      }
      
      function averageColorStyles(dot1, dot2) {
        var color1 = dot1.color,
            color2 = dot2.color;
        
        var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
            g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
            b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
        return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
      }
      
      function Color(min) {
        min = min || 0;
        this.r = colorValue(min);
        this.g = colorValue(min);
        this.b = colorValue(min);
        this.style = createColorStyle(this.r, this.g, this.b);
      }
    
      function Dot(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
    
        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();
    
        this.radius = Math.random() * 2;
    
        this.color = new Color();
        // console.log(this);
      }
    
      Dot.prototype = {
        draw: function(){
          ctx.beginPath();
          ctx.fillStyle = this.color.style;
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fill();
        }
      };
    
      function createDots(){
        for(var i = 0; i < dots.nb; i++){
          dots.array.push(new Dot());
        }
      }
    
      function moveDots() {
        for(var i = 0; i < dots.nb; i++){
    
          var dot = dots.array[i];
    
          if(dot.y < 0 || dot.y > canvas.height){
            dot.vx = dot.vx;
            dot.vy = - dot.vy;
          }
          else if(dot.x < 0 || dot.x > canvas.width){
            dot.vx = - dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      }
    
      function connectDots() {
        for(var i = 0; i < dots.nb; i++){
          for(var j = 0; j < dots.nb; j++){
            var i_dot = dots.array[i];
            var j_dot = dots.array[j];
    
            if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
              if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                ctx.beginPath();
                ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }
    
      function drawDots() {
        for(var i = 0; i < dots.nb; i++){
          var dot = dots.array[i];
          dot.draw();
        }
      }
    
      function animateDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        moveDots();
        connectDots();
        drawDots();
    
        requestAnimationFrame(animateDots);	
      }
    
    //   $('canvas').on('mousemove', function(e){
    //     mousePosition.x = e.pageX;
    //     mousePosition.y = e.pageY;
    //   });
      

    canvas.addEventListener("mousemove", function(e){
        mousePosition.x = e.pageX-420;
        mousePosition.y = e.pageY-180;
      })

    //   $('canvas').on('mouseleave', function(e){
    //     mousePosition.x = canvas.width / 2;
    //     mousePosition.y = canvas.height / 2;
    //   });
    canvas.addEventListener("mouseleave",  function(e){
        mousePosition.x = canvas.width / 2;
        mousePosition.y = canvas.height / 2;
      })

      createDots();
      requestAnimationFrame(animateDots);	
    }
}
</script>

<style>
  #bj{
      border-radius: 15px 15px 0 0;
      background: #000;
      width: 1280px;
      height: 665px;
      overflow: hidden;
      /* position: absolute; */
      position: relative;
      /* left: 420px;
      top:225px */
  }
  .songs{
   position: absolute;
   color: rgb(173, 143, 19);
    /* left: 420px;
      top:225px */
      left: 50px;
      top:30px;
      background-color:rgba(169,169,169,0.1);
      opacity: 0.5;
      font-size: 20px;
  }
  .add{
    margin-left: 100px;
  }
  
  .song{
    padding: 10px 0px;
  }
  .mv{
     margin-left: 10px;
     margin-right: 50px;
  }
</style>