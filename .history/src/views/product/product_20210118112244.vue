<template>
  <div>
    <div>
      <img src="../../img/about/toplogo.png" class="toplogo" alt="" />
    </div>

    <div>
        <div v-for="item in product" :key="item.id">
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
        { img: require('@/img/about/logo1.png'), path: "/about/faceRecognition" },
        { title: "翼闸", path: "/about/wingBrake" },
        { title: "摆闸", path: "/about/pendulumBrake" },
        { title: "三辊闸", path: "/about/threeGates" },
        { title: "平移闸", path: "/about/panBrake" },
        { title: "全高通闸", path: "/about/qualcommBrake" },
        { title: "立柱", path: "/about/standColumn" },
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