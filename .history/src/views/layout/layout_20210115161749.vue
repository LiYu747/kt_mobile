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
          <div v-for="item in locadata" class=" flex  fz-12" :key="item.id">
            <img :src="item.image" class="itemImg" alt="">
             <div>{{item.label}}</div>
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
        },
        {
          image:require('@/img/about/phone.png'),
          label:'手机：13060035586'
        },
        {
          image:require('@/img/about/email.png'),
          label:'邮箱：3107874946@qq.com'
        },
         {
          image:require('@/img/about/address.png'),
          label:'地址：成都市天府新区腹地·御香山3悦写字楼67栋二单元5楼503'
        }
        ]
      
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
  padding-top: 20px;
}

.contactUs{
  width: 280px;
  height: 200px;
  color: #ffffff;
  margin-left: 20px;
}

.itemImg{
  width: 16px;
  height: 16px;
}
</style>