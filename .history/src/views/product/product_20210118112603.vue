<template>
  <div>
    <div>
      <img src="../../img/about/toplogo.png" class="toplogo" alt="" />
    </div>

    <div class=" felx">
        <div v-for="item in product" class="" :key="item.id">
            <img :src="item.img" alt="">
        </div>
    </div>
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
</style>