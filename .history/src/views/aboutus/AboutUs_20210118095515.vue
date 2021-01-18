<template>
  <div class=" flex-d al-center">
    <div class="">
      <img src="../../img/aboutUs/toplogo.png" class="topImg" alt="" />
    </div>
    <div class="contnetBox">
       <div class="aboutMe">
      <div class="aboutWho flex m-t2">
        <div class="aText">WHO WE ARE</div>
        <div>/我们是谁</div>
      </div>
      <div class="line"></div>
      <div class="abry">关于快通</div>
      <div class="m-t2">
        快通APP是一款优质出行服务类软件，当下我们享受着时尚的生活和快节奏的出行方式，但是难免会感受到一些出行的不便和问题，比如单元门口忘带门禁卡迟迟回不了家、双手都拎满了东西，没有空手按电梯、电梯里人太多害怕病菌传染、去朋友家做客要填一大堆资料等等。这些问题，快通来帮你解决，当你走到小区门口门禁会自动识别，走到单元门，单元门会自动打开，走到电梯，电梯自动识别业主，电梯会自动下降到一楼等待，进入轿厢，不用按键，自动到达业主楼层。访客可在APP上向业主申请访问获得授权二维码，到达小区门口扫码进入，并在物业管理处自动生成一条来访信息。开车出行也无需等级，车牌号预选绑定。
      </div>
      <div class=" m-t1">
        <img src="../../img/aboutUs/logo1.png" class="logo1" alt="">
      </div>
      <div class="m-t1">
        快通APP使您的生活更加便捷，节省时间精力，物业方只需将现有的硬件与快通模块相匹配结合，也可直接使用快通整套硬件设备，用户只需在手机应用商店下载“快通”APP注册登录，安全可靠，放心应用，我们积极响应国家号召，以物联网、大数据云技术、AI为基础，加速建设智慧城市家园。
      </div>
    </div>
      <div class="flex-d al-center m-t4 aServe">
          <div>一切为您的需求服务！</div>
          <div class="m-t1">Customer First！</div>
        </div>
        <div class="honor flex-d al-center">
      <div class="hTil">荣誉资质</div>
      <div class="certificate flex ju-around al-center">
        <img src="../../img/home/certificate/cer1.png" class="cer1Img" alt="" />
        <img src="../../img/home/certificate/cer2.png" class="cer2Img" alt="" />
      </div>

      <div class="m-t5 hTil">安装案例</div>
      <div class="flex ju-between work">
        <img src="../../img/home/works1.png" class="works1Img" alt="" />
        <img src="../../img/home/works2.png" class="works2Img" alt="" />
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.topImg {
  width: 100%;
  height: 170px;
}

.aboutMe {
  font-size: 12px;
}

.aboutWho {
  align-items: baseline;
}

.aText {
  font-size: 24px;
  font-weight: 700;
}

.aboutRY {
  margin-top: 70px;
  color: #ff6609;
  font-size: 24px;
}

.contnetBox{
  width: 90%;
  font-size: 12px;
}

.line {
  width: 55px;
  height: 2px;
  background: #666666;
  margin: 20px 0;
}

.abry {
  font-size: 18px;
  color: #4d4d4d;
}

.logo1{
  width: 100%;
}

.aServe {
  font-size: 16px;
  color: #494340;
}

.honor {
  margin-top: 60px;
}

.hTil {
  font-size: 20px;
}

.certificate {
  width: 100%;
  margin-top: 30px;
}

.cer1Img {
  width: 100px;
  height: 110px;
}

.cer2Img {
  width: 100px;
  height: 10px;
}

.work {
  margin-top:30px;
  width: 100%;
}

.works1Img {
  width: 164px;
  height: 250px;
}

.works2Img {
  width: 164px;
  height: 250px;
}

</style>