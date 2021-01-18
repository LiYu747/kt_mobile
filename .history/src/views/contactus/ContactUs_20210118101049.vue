<template>
 <div>
 <div class="mapBox m-l5">
            <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:250px" :scroll-wheel-zoom='true'>
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
.mapBox {
  width: 100%;
}
</style>