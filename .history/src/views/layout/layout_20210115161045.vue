<template>
 <div>
   <div class="Htil flex al-center ju-between">
     <img src="../../img/home/logo.png" class="logoImg" alt="">
     <img src="../../img/home/logo2.png" class="logo2Img" alt="">
   </div>
   <div class="topLIne"></div>
      <router-view />
     <div class="section">
       <div class="contactUs">
         <div class=" fz-16">联系我们</div>
          <div v-for="item in locadata" :key="item.id">
            <img :src="item.image" alt="">
          </div>
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
      locadata:[ {
          image:require('@/img/about/tel.png'),
          label:'电话：028-63828442'
        }]
      
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

.section{
  margin-top: 30px;
  width: 100%;
  height: 300px;
  background: #333333;
  padding-top: 30px;
}

.contactUs{
  width: 300px;
  height: 200px;
  color: #ffffff;
  margin-left: 30px;
 
}
</style>