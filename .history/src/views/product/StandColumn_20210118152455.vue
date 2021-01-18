<template>
 <div class="flex-d al-center wid">
    <div class=" fz-18">
        产品列表
    </div>
     <div class="flex al-center m-t1">
        <div class="lline"></div>
        <div class="dot"></div>
        <div class="lline"></div>
    </div>
    <div class="contentBox m-t3">
        <div v-for=" (item) in productLists" :key="item.id" class="itemBox flex m-b2">
            <div class="flex-d">
          <div class="fz-12 pos-abs">{{ item.title }}</div>
          <div class="itemI flex-d al-center m-t2">
            <img :src="item.image" class="itemImg m-t2"  alt="" />
            <div class="m-t1 fz-12">{{ item.model }}</div>
          </div>
        </div>
        <div class="itemPar">
          <div v-for="items in item.parameter" class="m-1-1" :key="items.id">
            {{ items }}
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
         productLists: [
        {
          title: "伸缩立柱",
          image: require("@/img/StandColumn/logo1.png"),
          model: "CX101",
          parameter:['1. 材料:铝合金','2. 电源:12 v','3. DC: 1个DC,2个DC(分别为主机和LED供电)','4. 主机尺寸:301.45 * 280.03 * 651.1毫米','5. 颜色:白色','6. 电源:≤3',
          '7. 最大功耗:≤13.5W','8. 存储温度:-20℃-60℃','9. USB接口:USB * 2','10. 底座尺寸:301*280mm','11. 高度可调，最小0.65米，最大1.18米']
        },
         {
          title: "立柱",
          image: require("@/img/StandColumn/logo2.png"),
          model: "CX201",
          parameter:['1. 材料:铝合金','2. 电源:12 v','3. DC: 1个DC,2个DC(分别为主机和LED供电)','4. 主机尺寸:301.45 * 280.03 * 1114.67毫米','5. 颜色:闪亮的银','6. 电源:≤3',
          '7. 最大功耗:≤13.5W','8. 存储温度:-20℃-60℃','9. USB接口:USB * 2','10. 底座尺寸:301*280mm','11. 高度:1100mm']
        },
         {
          title: "60cm立柱",
          image: require("@/img/StandColumn/logo2.png"),
          model: "CX202",
          parameter:['1. 材料:铝合金','2. 电源:12 v','3. DC: 1个DC,2个DC(分别为主机和LED供电)','4. 主机尺寸:301.45 * 280.03 * 1114.67毫米','5. 颜色:闪亮的银','6. 电源:≤3',
          '7. 最大功耗:≤13.5W','8. 存储温度:-20℃-60℃','9. USB接口:USB * 2','10. 底座尺寸:301*280mm','11. 高度:600mm']
        },
          {
          title: "身份证立柱",
          image: require("@/img/StandColumn/logo3.png"),
          model: "CXS301",
          parameter:['1. 材料:铝合金','2. 电源:12 v','3. DC: 1个DC,2个DC(分别为主机和LED供电)','4. 主机尺寸:301.45 * 280.03 * 1114.67毫米','5. 颜色:闪亮的银','6. 电源:≤3',
          '7. 最大功耗:≤13.5W','8. 存储温度:-20℃-60℃','9. USB接口:USB * 2','10. 底座尺寸:301*280mm','11. 高度:1100mm']
        },
           {
          title: "桌面立柱",
          image: require("@/img/StandColumn/logo4.png"),
          model: "CX301",
          parameter:['1. 底座厚3.8CM','2. 自带两个USB接口','3. 底座自带调节螺丝','4. 酷炫蓝色灯带','5. 冷轧板环保烤漆']
        },
         {
          title: "三角支架",
          image: require("@/img/StandColumn/logo5.png"),
          model: "SJ101",
        },
      ],
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
    width: 100%;
}
.contentBox{
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

.itemBox{
    width: 90%;
    background: #ffffff;
    padding: 10px 5%;
}

.itemI{
 width: 140px;
}



.itemPar {
  margin-top: 40px;
  margin-left: 10px;
  width: 205px;
  font-size: 12px;
}


</style>