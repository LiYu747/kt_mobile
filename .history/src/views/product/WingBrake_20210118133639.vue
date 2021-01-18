<template>
 <div class=" flex-d al-center wid">
     <div class=" fz-18">
        产品参数
     </div>
     <div class="flex al-center m-t1">
        <div class="lline"></div>
        <div class="dot"></div>
        <div class="lline"></div>
     </div>
     <div class=" m-t1 Til">
         翼闸
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.wid{
    width: 90%;
}
.lline {
  width: 30px;
  height: 2px;
  background: #bfbfbf;
}

.dot {
  width: 4px;
  height: 4px;
  background: #000000;
  border-radius: 50%;
  margin: 0 3px;
}

.Til{
    font-weight: 700;
    font-size: 16px;
}
</style>