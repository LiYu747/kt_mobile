<template>
 <div>
 <div class="mapBox m-l5">
            <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:300px" :scroll-wheel-zoom='true'>
         </baidu-map>
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
</style>