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
    <div>人脸识别机</div>
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
          title: "8寸人脸识别测温门禁机",
          image: require("@/img/face/product1.png"),
          model: "KT721",
          parameter: [
            "1.显示屏：8寸",
            "2.存储：支持22400张人脸库",
            "3.识别距离：0.5~2米",
            " 4.比对记录：最大10万条记录、可导出",
            "5.供电：DC12V",
            "6.测温精度：±0.3℃",
            "7.支持闸机或壁挂",
            "8.人脸测温",
          ],
        },
        {
          title: "7寸人脸识别测温考勤门禁机",
          image: require("@/img/face/product2.png"),
          model: "KT722",
          parameter: [
            "1.显示屏：7寸",
            "2.存储：支持22400张人脸库",
            "3.识别距离：0.5~3米",
            " 4.比对记录：最大10万条记录、可导出",
            "5.供电：DC12V",
            "6.测温精度：±0.5℃",
            "7.支持闸机或壁挂",
            "8.人脸测温",
          ],
        },
        {
          title: "7寸人脸识别手腕测温门禁机",
          image: require("@/img/face/product3.png"),
          model: "KT723",
          parameter: [
            "1.显示屏：7寸",
            "2.存储：支持10000张人脸比对库",
            "3.识别距离：0.3~1.5米",
            " 4.比对记录：最大8万条记录、可导出",
            "5.供电：DC12V",
            "6.支持闸机或壁挂",
            "7.自带遮阳板",
            "8.手腕测温",
          ],
        },
        {
          title: "5寸人脸识别门禁机",
          image: require("@/img/face/product4.png"),
          model: "KT501",
          parameter: [
            "1.显示屏：5寸",
            "2.存储：支持10000张人脸比对库",
            "3.识别距离：0.5~1.5米",
            "4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            "6.支持壁挂",
          ],
        },
        {
          title: "7寸人脸识别门禁机",
          image: require("@/img/face/product5.png"),
          model: "KT701",
          parameter: [
            "1.显示屏：7寸",
            "2.存储：支持10000张人脸比对库",
            "3.识别距离：0.5~1.5米",
            " 4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            "6.支持闸机或壁挂",
            "7.自带遮阳板",
          ],
        },
        {
          title: "8寸人脸识别+IC卡门禁机",
          image: require("@/img/face/product6.png"),
          model: "KT722",
          parameter: [
            "1.显示屏：8寸",
            "2.存储：支持10000张人脸比对库",
            "3.识别距离：0.5~1.5米",
            " 4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            " 6.支持IC卡识别",
            "7.支持闸机或壁挂",
          ],
        },
        {
          title: "人脸识别腕温扫码一体机",
          image: require("@/img/face/product7.png"),
          model: "",
          parameter: [
            "1.存储：支持10000张人脸比对库",
            "2.识别距离：0.3~1.5米",
            " 3.比对记录：最大6万条记录、可导出",
            "4.支持闸机或壁挂",
            "5.供电：DC12V",
            "6.自带遮阳板；手腕测温；二维码识别",
            "7.支持双目活体检测",
            "8.采用LINUX操作系统，系统稳定",
            "9.支持近距离测量体温，并高温报警",
            "10.IP65级防水防尘",
            "11.支持温度数据接口协议对接",
            "12.接口协议丰富、丰富的硬件接口",
          ],
        },
        {
          title: "人脸识别扫码一体机",
          image: require("@/img/face/product8.png"),
          model: "",
          parameter: [
            "1.存储：10000张人脸比对库",
            "2.识别距离：0.5~1.5米",
            " 3.比对记录：最大6万条记录、可导出",
            "4.支持二维码扫码、带遮阳板",
            "5.支持闸机或壁挂",
            "6.供电：DC12V",
            "7.支持强逆光环境下运动人脸追踪曝光；支持双目活体检测",
            "8.采用LINUX操作系统，系统稳定",
            "9.独有的人脸识别算法，精准识别人脸，人脸识别时间小于0.5s",
            "10.IP66级防水、防尘",
            "11.可自动白平衡、手动白平衡",
            "12.接口协议丰富、丰富的硬件接口",
          ],
        },
        {
          title: "8寸人脸识别+IC卡门禁机4G版",
          image: require("@/img/face/product9.png"),
          model: "KT801-4G",
          parameter: [
            "1.显示屏：8寸",
            "2.存储：10000张人脸比对库",
            " 3.识别距离：0.5~1.5米",
            "4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            "6.支持闸机或壁挂",
            "7.4G模块",
          ],
        },
        {
          title: "8寸人脸识别扫码IC卡一体门禁机",
          image: require("@/img/face/product10.png"),
          model: "KT808",
          parameter: [
            "1.显示屏：8寸",
            "2.存储：10000张人脸比对库",
            " 3.识别距离：0.5~1.5米",
            "4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            "6.支持IC卡识别",
            "7.支持二维码扫码",
            "8.支持闸机或壁挂",
          ],
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