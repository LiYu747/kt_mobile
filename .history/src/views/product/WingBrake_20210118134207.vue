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
     <div class=" m-t2 Til">
         翼闸
     </div>
     <div class="introduce fz-12 m-t1">
         翼闸是主要针对人员出入口控制管理的高科技产品，是三辊闸和摆闸的升级产品，该设备将机械、电子微处理器控制并集成电子门票系统，门禁考勤系统，停车场系统，人脸识别系统，防静电，指纹，掌纹，虹膜等生物识别系统的整合及运用。
     </div>
     <div class=" flex-d al-center">
        <img src="../../img/WingBrake/logo1.png" alt=""> 
        <img src="../../img/WingBrake/logo2.png" alt=""> 
        <img src="../../img/WingBrake/logo3.png" alt=""> 
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

.introduce{
    width: 90%;
    background: #ffffff;
    padding: 5%;
}
</style>