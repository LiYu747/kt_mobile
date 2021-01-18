<template>
  <div>
    <div class="Htil flex al-center ju-between" :class="show==true?'dv':''">
      <img src="../../img/home/logo.png" class="logoImg" alt="" />
      <img src="../../img/home/logo2.png" @click="show = !show" class="logo2Img" alt="" />
    </div>
    <div class="showbox" v-if="show == true">
      <div v-for=" item in navigation" class=" itemBox flex-d " :key="item.id">
       <div class="itemL flex al-center ju-between">  
         {{item.label}}
         <img ref="xialaImg" src="../../img//home/xiala.png" :style="{ transform:transform,transition: 'all 1s'}" @click="xiala" v-if="item.children" class="xialaImg" alt="">
       </div>
       <div class="back">
          <div v-if="item.children" class="ssbox">
          <div v-for="items in item.children" class="itemsL" :key="items.id">
            {{items.label}}
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
          <div class=" m-b2">产品中心</div>
          <div v-for="item in product" class="fz-12 m-t1" :key="item.id">
            {{ item.label }}
          </div>
        </div>
        <div class="mar-l">
           <div class=" m-b2">快速导航</div>
            <div v-for="item in navigation" class="fz-12 m-t1" :key="item.id">
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
      show:false,
      transform:'rotate(0deg)',
      num:0,
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
        },
        {
          label: "翼闸",
        },
        {
          label: "摆闸",
        },
        {
          label: "三辊闸",
        },
        {
          label: "平移闸",
        },
        {
          label: "全高通闸",
        },
        {
          label: "立柱",
        },
      ],
      navigation: [
        {
          label: "网站首页",
        },
         {
          label: "关于我们",
        },
          {
          label: "产品中心",
          children:[
            {
          label: "人脸识别机",
        },
        {
          label: "翼闸",
        },
        {
          label: "摆闸",
        },
        {
          label: "三辊闸",
        },
        {
          label: "平移闸",
        },
        {
          label: "全高通闸",
        },
        {
          label: "立柱",
        },
          ]
        },
          {
          label: "联系我们",
        },
      ]
    };
  },
  methods: {
    xiala(){
      this.num = this.num+180
      this.transform = 'rotate' + "(" + this.num + 'deg' + ')' 
    }
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
  margin-top: 30px;
  width: 100%;
  background: #333333;
  padding-top: 20px;
  padding-bottom: 30px;
}

.contactUs {
  width: 280px;
  color:#CCCCCC;
  margin-left: 20px;
}

.itemImg {
  width: 16px;
  height: 16px;
}

.mar-l{
  margin-left: 120px;
}

.showbox{
  top: 40px;
  width: 100%;
  background: #ffffff;
  position: fixed;
  padding-bottom: 20px;
}

.itemBox{
  padding: 0 20px;
}

.dv{
box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
}

.itemL{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #CCCCCC;
}

.xialaImg{
  width: 20px;
  height: 20px;
}
.back{
  width: 100%;
 background: #fafafa;
}
.ssbox{
  width: 300px;
  margin-left: 20px;
 
}
.itemsL{
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #CCCCCC;
}
</style>