<template>
  <div>
    <div
      class="Htil flex al-center ju-between"
      :class="show == true ? 'dv' : ''"
    >
      <img src="../../img/home/logo.png" class="logoImg" alt="" />
      <img
        src="../../img/home/logo2.png"
        @click="show = !show"
        class="logo2Img"
        alt=""
      />
    </div>
    <div class="showbox" v-if="show == true">
      <div
        v-for="item in navigation"
        class="itemBox flex-d al-center"
        :class="flag == true && item.children ? 'itemb' : ''"
        :key="item.id"
        @click="goto(item)"
      >
        <div class="itemL flex al-center ju-between">
          {{ item.label }}
          <img
            ref="xialaImg"
            src="../../img//home/xiala.png"
            :style="{ transform: transform, transition: 'all 1s' }"
            v-if="item.children"
            class="xialaImg"
            alt=""
          />
        </div>
        <div class="back" v-show="item.children && flag == true">
          <div class="ssbox">
            <div
              v-for="items in item.children"
              class="itemsL"
              @click="itemChild(items)"
              :key="items.id"
            >
              {{ items.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="topLIne"></div>
    <router-view />
    <div class="section">
      <div class="contactUs">
        <div class="fz-16">联系我们</div>
        <div v-for="item in locadata" class="flex fz-12 m-t1" :key="item.id">
          <img :src="item.image" class="itemImg" alt="" />
          <div class="m-l1">{{ item.label }}</div>
        </div>
      </div>

      <div class="contactUs m-t3 flex">
        <div>
          <div class="m-b2">产品中心</div>
          <div v-for="item in product" @click="itemChild(item)" class="fz-12 m-t1" :key="item.id">
            {{ item.label }}
          </div>
        </div>
        <div class="mar-l">
          <div class="m-b2">快速导航</div>
          <div v-for="item in btnnavigation"  @click="goto(item)" class="fz-12 m-t1" :key="item.id">
            {{ item.label }}
          </div>
        </div>
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
      show: false,
      transform: "rotate(0deg)",
      num: 0,
      flag: false,
      locadata: [
        {
          image: require("@/img/about/tel.png"),
          label: "电话：028-63828442",
        },
        {
          image: require("@/img/about/phone.png"),
          label: "手机：13060035586",
        },
        {
          image: require("@/img/about/email.png"),
          label: "邮箱：3107874946@qq.com",
        },
        {
          image: require("@/img/about/address.png"),
          label: "地址：成都市天府新区腹地·御香山3悦写字楼67栋二单元5楼503",
        },
      ],
      product: [
        {
              label: "人脸识别机",
              path: "/product/faceRecognition",
            },
            {
              label: "翼闸",
               path: "/product/wingbrake"
            },
            {
              label: "摆闸",
              path: "/product/pendulumbrake"
            },
            {
              label: "三辊闸",
               path: "/product/threegates" 
            },
            {
              label: "平移闸",
              path: "/product/panbrake" 
            },
            {
              label: "全高通闸",
              path: "/product/qualcommbrake"
            },
            {
              label: "立柱",
              path: "/product/standcolumn"
            },
      ],
      navigation: [
        {
          label: "网站首页",
          path: "/",
        },
        {
          label: "关于我们",
          path: "/aboutus",
        },
        {
          label: "产品中心",
          path:'',
          children: [
            {
              label: "人脸识别机",
              path: "/product/faceRecognition",
            },
            {
              label: "翼闸",
               path: "/product/wingbrake"
            },
            {
              label: "摆闸",
              path: "/product/pendulumbrake"
            },
            {
              label: "三辊闸",
               path: "/product/threegates" 
            },
            {
              label: "平移闸",
              path: "/product/panbrake" 
            },
            {
              label: "全高通闸",
              path: "/product/qualcommbrake"
            },
            {
              label: "立柱",
              path: "/product/standcolumn"
            },
          ],
        },
        {
          label: "联系我们",
          path: "/contactus",
        },
      ],
      btnnavigation: [
        {
          label: "网站首页",
          path: "/",
        },
        {
          label: "关于我们",
          path: "/aboutus",
        },
        {
          label: "产品中心",
          path:'/product/faceRecognition',
        },
        {
          label: "联系我们",
          path: "/contactus",
        },
      ],
    };
  },
  methods: {
    xiala() {
      this.flag = !this.flag;
      this.num = this.num + 180;
      this.transform = "rotate" + "(" + this.num + "deg" + ")";
    },
    goto(item) {
      if (item.children) {
        this.xiala();
      }
      if (this.$route.path == item.path || !item.path) return;
      this.$router.push({ path: item.path });
      this.show = false;
      this.num = 0;
      this.transform = "rotate(0deg)";
      this.flag = false;
       window.scrollTo(0, 0);
    },
    itemChild(items) {
      if (this.$route.path == items.path ) return;
      this.$router.push({ path: items.path });
       this.show = false;
      this.num = 0;
      this.transform = "rotate(0deg)";
      this.flag = false;
       window.scrollTo(0, 0);
       console.log(this.show)
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.Htil {
  width: 84%;
  height: 40px;
  padding: 0 8%;
  position: fixed;
  z-index: 9;
  background: #ffffff;
}
.topLIne {
  height: 40px;
}
.logoImg {
  width: 90px;
  height: 25px;
}

.logo2Img {
  width: 20px;
  height: 20px;
}

.section {
  width: 100%;
  background: #333333;
  padding-top: 20px;
  padding-bottom: 30px;
}

.contactUs {
  width: 280px;
  color: #cccccc;
  margin-left: 20px;
}

.itemImg {
  width: 16px;
  height: 16px;
  margin-top: 2px;
}

.mar-l {
  margin-left: 120px;
}

.showbox {
  top: 40px;
  width: 100%;
  background: #ffffff;
  position: fixed;
  height: 100vh;
  z-index: 99;
}

.dv {
  box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
}

.itemL {
  width: 90%;
  height: 50px;
  border-bottom: 1px solid #cccccc;
}

.xialaImg {
  width: 16px;
  height: 16px;
}
.back {
  width: 100%;
  background: #fafafa;
}
.ssbox {
  width: 300px;
  margin-left: 40px;
}
.itemsL {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #cccccc;
}

.itemb {
  background: rgba(53, 136, 231, 0.1);
  .itemL {
    border-bottom: none;
  }
}
</style>