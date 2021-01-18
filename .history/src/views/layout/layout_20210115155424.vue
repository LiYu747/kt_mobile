<template>
 <div>
   <div class="Htil flex al-center ju-between">
     <img src="../../img/home/toplogo.png" class="logoImg" alt="">
     <img src="../../img/home/logo2.png" class="logo2Img" alt="">
   </div>
   <div class="topLIne"></div>
    
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
background: #ffffff;
}
.topLIne{
  height: 50px;
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
}
</style>