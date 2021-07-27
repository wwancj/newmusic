<template>
   
 
        
          <div>
            云音乐特色榜
            <bangdan>
              
            </bangdan>
          </div>
     
     
</template>

<script>
import bangdan from './bangdan.vue'
export default {
    // name:"body"
    components:{bangdan}
}
</script>

<style scoped lang="less">
.rowe {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.row_3 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.bg-purple {
  background-color: #778ba6;

  border-radius: 4px;
  margin-top: 20px;
  box-shadow: 2px 2px 13px #333333;
  padding: 0 10px;

  min-height: 70vh;
}
</style>