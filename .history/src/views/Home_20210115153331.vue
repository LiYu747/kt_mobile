<template>
 <div>
   <div class="Htil flex al-center ju-between">
     <img src="../img/home/logo.png" class="logoImg" alt="">
     <img src="../img/home/logo2.png" class="logo2Img" alt="">
   </div>
   <div class=" contentBox flex-d al-center">
     <img src="../img/home/toplogo.png" class="toplogo" alt="">
     <div class="abuotUs m-t3">
        ABOUT US
     </div>
     <div class="line "></div>
     <div class="abuotUs ">
       公司简介
     </div>
     <div class="Txtbox m-t2 fz-12">
      成都锐远电子科技有限公司是一家集研发、生产、销售、安装、售后为一体的高新技术企业，公司秉承服务至上的经营理念，为此，我司不断升级老产品，发展新业务，且可为有特殊需求的客户进行定制化设计，力求达到所有客户最高的满意度。主营产品包括智慧社区管理系统、物联网通行系统、及各类硬件设备，如人脸识别机器（活体检测、口罩识别、二维码识别、IC卡、红外测温、手腕测温等）；通道闸机（翼闸、三辊闸、摆闸、平移闸、全高通闸等）。
     </div>
     <div class=" m-t4">
       一切为您的需求服务！
     </div>
     <div class=" m-t1">
          Customer First！
     </div>

     <div class="videoBox">
       
     </div>
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
.Htil{
width: 84%;
height: 50px;
padding: 0 8%;
position: fixed;
z-index: 9;
}

.logoImg{
  width: 100px;
  height: 30px;
}

.logo2Img{
  width: 20px;
  height: 20px;
}

.toplogo{
  width: 100%;
  height: 160px;
}

.contentBox{
  width: 100%;
  background: #f5f5f5;
  color: #4D4D4D;
}

.abuotUs{
  font-size: 22px;
}

.line{
  width: 50px;
  height: 1px;
  background: #4D4D4D;
  margin-top: 15px;
  margin-bottom: 5px;
}

.Txtbox{
  width: 320px;
  padding:  10px;
  background: #ffffff;
line-height: 20px;
}

.videoBox{
  width: 340px;
  height: 200px;
  background: red;
}
</style>