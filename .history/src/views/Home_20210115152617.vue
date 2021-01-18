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
     <div class="Txtbox m-t2">

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
  height: 600px;
  background: #f5f5f5;
  color: #4D4D4D;
}

.abuotUs{
  font-size: 20px;
}

.line{
  width: 50px;
  height: 1px;
  background: #4D4D4D;
  margin-top: 15px;
  margin-bottom: 5px;
}

.Txtbox{
  width: 340px;
  height: 300px;
  background: #ffffff;
}
</style>