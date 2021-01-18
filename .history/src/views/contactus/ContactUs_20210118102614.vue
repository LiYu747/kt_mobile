<template>
 <div>
 <div class="mapBox m-l5">
            <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:300px" :scroll-wheel-zoom='true'>
         </baidu-map>
        </div>
      <div class="connectUs flex-d al-center">
          <div class="conTil">欢 迎 联 系 我 们</div>
          <!-- 联系我们 -->
          <div class="m-t3 m-l2 fz-12">
           <div class=" flex">
              <div class="flex al-center pos-rel">
              <img
                src="../../img/aboutUs/tel.png"
                class=" locpos"
                alt=""
              />
              <div class=" m-l1">电话：028-63828442</div>
            </div>
            <div class="flex al-center pos-rel">
              <img
                src="../../img/aboutUs/phone.png"
                class=" locpos"
                alt=""
              />
              <div class=" m-l1">手机：13060035586</div>
            </div>
           </div>
            <div class="flex al-center pos-rel">
              <img
                src="../../img/aboutUs/email.png"
                class=" locpos"
                alt=""
              />
              <div class=" m-l1">邮箱：3107874946@qq.com</div>
            </div>
            <div class="flex al-center pos-rel">
              <img
                src="../../img/aboutUs/address.png"
                class=" locpos"
                alt=""
              />
              <div class="m-b3 m-l1">
                地址：成都市天府新区复地·御香山3悦写字楼67栋二单元5楼503室
              </div>
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
            center: {lng: 104.076651, lat: 30.481883},
            zoom: 13,
     }
   },
   methods: {
  handler ({BMap, map}) {
      var point = new BMap.Point(104.076651, 30.481883)
      map.centerAndZoom(point, 18)
      var marker = new BMap.Marker(point) // 创建标注
       marker.setTitle("锐远电子科技有限公司");
      map.addOverlay(marker) // 将标注添加到地图中
    },
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
.mapBox {
  width: 100%;
}
.connectUs{
width: 100%;
}

.conTil{
  margin-top: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #4D4D4D;
}

.locpos{
  width: 12px;
  height: 12px;
}
</style>