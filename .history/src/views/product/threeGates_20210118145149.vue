<template>
 <div class=" flex-d al-center wid">
     <div class=" fz-18">
        产品参数
     </div>
     <div class="flex al-center m-t1">
        <div class="lline"></div>
        <div class="dot"></div>
        <div class="lline"></div>
     </div>
     <div class=" m-t2 Til">
         三辊闸
     </div>
     <div class="introduce fz-12 m-t1">
        智能摆闸是经过多年精心开发、研制、生产的智能化通道管理设备，是主要针对人员通道进行智能管理的高科技产品。该设备将机械、电子、微处理器控制及各种身份识别技术有机地融为一体，通过选配各种身份识别系统设备和采用性能可靠的安全保护装置、报警装置、方向指示、以及扩展友好的LED计数显示界面，协调实现对通道智能化控制与管理等。配有主控箱，线路清晰明了，即便是初次接触也可以在技术员电话指导下检查线路故障及维护！ 
         智能摆闸能方便兼容IC卡、ID卡、条码卡、指纹等读卡识别设备的使用，为出入人员提供文明、有序的通行方式，有效管理人员进出。可广泛应用于车站、码头、地铁、工厂、大厦、智能小区、宾馆、会所、企事业单位等需要对通道实现智能化管理的场合。
     </div>
     <div class=" flex-d al-center m-t3">
        <img src="../../img/PendulumBrake/logo1.png" alt=""> 
        <img src="../../img/PendulumBrake/logo2.png" alt=" " >  
        <img src="../../img/PendulumBrake/logo3.png" alt="" class="poslod"> 
     </div>
     <div>
         详细介绍
     </div>
     <div class="details">
         <div v-for="item in datailsList" class="m-b3 fz-12" :key="item.id">
            <div class="m-b3">{{ item.tiele }}</div>
            <div v-for="items in item.content" class="itemsTxt" :key="items.id">
              {{ items }}
            </div>
          </div>
          <div  class=" fz-12 m-t2">备注：实际产品与样图稍有差异。</div>
          <div class="m-t1 m-b4 fz-12">
            所有摆闸的功能都是一样的，区别就在于产品的外观和尺寸，以上摆闸的功能和技术参数都是标准设备的参数，本公司也可以根据用户的要求而设定，所有设备都可以配合门禁、指纹机、人脸识别、人证合一、票务系统、等使用。
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
      datailsList: [
        {
          tiele: "三辊闸功能特点",
          content: [
            "1.全自动三辊闸：",
            "◇兼容IC、ID、磁卡、条码卡、防静电等多种控制设备",
            "◇闸杆运行平稳、低躁音",
            "◇具有断电应急功能，闸杆断电自动落杆，通电自动上杆",
            "◇控制板带有计数功能，LED数字显示功能(可选)",
            "◇控制板带有记忆功能",
            "◇有标准的输入、输出接口，是系统集成商的最佳首选",
            '2.半自动三辊闸：',
            '◇兼容IC、ID、磁卡、条码卡、防静电等多种控制设备',
            '◇闸杆解锁，迅速可靠',
            '◇具有断电应急功能，闸杆断电自动落杆，通电手抬上杆',
            '◇控制板带有计数功能，LED数字显示功能(可选)',
            '◇控制板带有记忆功能',
            '◇有标准的输入、输出接口，是系统集成商的最佳首选',
            '3.机械三辊闸：',
            '◇独特的定位、复位系统：自动复位，能够始终保持其一根杆处于水平位置',
            '◇属于纯机械传动产品，无电控操作，具有结构简单、可靠性高',
            '◇不用维护等特点，适用于单向限流管理的场所。'
          ],
        },
         {
          tiele: "适用范围",
          content: [
            "◇车站、码头、旅游景点进出口通道管理",
            "◇会展、游泳馆等验票通道管理",
            "◇企事业单位进出口考勤、门禁、消费管理",
            "◇特殊通道控制",
          ],
        },
        {
          tiele: "产品主要技术参数",
          content: [
            "◇结构：框架结构/不锈钢外壳",
            "◇生产工艺：全电脑数控激光切割机生产",
            "◇外形尺寸：（立式长420×宽330×高980mm）；（桥式长 1200×宽280×高980 mm）",
            "◇重量：（立式40Kg） （桥式70KG）",
            "◇闸杆长：机箱以外500(mm)",
            "◇闸杆最大承受力：80Kg",
            "◇闸杆工作驱动力：3Kg",
            "◇闸杆传动方式：数字方式",
            "◇闸杆转向：单向、双向（可选）；具有多种工作模式可供选择，即可双向读卡限流，也可一边读卡、另一方向禁行，一边读卡、另一方向自由通行",
            "◇自动复位功能：开闸后，在规定的时间内未通行系统将自动上锁，通行时间可调",
            "◇灯光提示：通行方向指示",
            "◇对输入控制信号没有延时要求",
            "◇工作环境：室内、室外(阴棚）",
            "◇温度：-10℃ ～ 50℃ 相对湿度：≤90%，不凝露",
            "◇感应卡读卡口尺寸：配带标准安装支架，或度身定做",
            "◇开闸时间：0.2秒",
            "◇通行速度：30人/分钟",
            '◇通讯接口：标准RS485接口，距离≤1200米',
            '◇输入接口：干接点信号或+12V电平信号或脉宽≥100ms的DC12V脉冲信号，驱动 电流≥10mA。'
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

.Til{
    font-weight: 700;
    font-size: 16px;
}

.introduce{
    width: 90%;
    background: #ffffff;
    padding: 5%;
}
.poslod{
    margin-top: -30px;
}

.details{
    margin-top: 10px;
    width: 90%;
    padding: 5%;
    background: #ffffff;
    margin-bottom: 50px;
}


</style>