<template>
  <div class=" flex-d al-center">
    <div>
      <img src="../../img/about/toplogo.png" class="toplogo" alt="" />
    </div>
    <div class=" flex topbar ">
        <div v-for="item in product" class="itemBox flex-d al-center pos-rel" :key="item.id">
            <img :src="item.img" class="itemImg" alt="">
            <div class=" fz-12 pos-abs move">{{item.title}}</div>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      product: [
        { img: require('@/img/about/logo1.png') , title:'人脸识别机', path: "/about/faceRecognition" },
        { img: require('@/img/about/logo2.png') ,title: "翼闸", path: "/about/wingBrake" },
        { img: require('@/img/about/logo3.png') , title: "摆闸", path: "/about/pendulumBrake" },
        { img: require('@/img/about/logo4.png') , title: "三辊闸", path: "/about/threeGates" },
        { img: require('@/img/about/logo5.png') , title: "平移闸", path: "/about/panBrake" },
        { img: require('@/img/about/logo6.png') , title: "全高通闸", path: "/about/qualcommBrake" },
        { img: require('@/img/about/logo7.png') , title: "立柱", path: "/about/standColumn" },
      ],
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.toplogo {
  width: 100%;
  height: 200px;
}

.topbar{
    width: 90%;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

.itemBox{
    width: 70px;
    height: 70px; 
     margin-right: 14px;
    margin-top: 10px;
}

.itemImg{
    width: 70px;
    height: 70px;
}

.move{
    bottom: 5px;
}
</style>