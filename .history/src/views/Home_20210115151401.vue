<template>
 <div>
   <div class="Htil flex al-center ju-between">
     <img src="../img/home/logo.png" class="logoImg" alt="">
     <img src="../img/home/logo2.png" alt="">
   </div>
   <div class=" contentBox flex-d al-center">
     <img src="../img/home/toplogo.png" class="toplogo" alt="">
     
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

.toplogo{
  width: 100%;
  height: 160px;
}

.contentBox{
  width: 100%;
  height: 600px;
  background: #f5f5f5;
}
</style>