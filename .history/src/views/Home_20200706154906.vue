<template>
 <div>
     <Navson @vvs='vvs' @msg='msg'></Navson>
      <div v-if="falg==='1'">
        <div class="sky" ref="Silky">
       <div class="somll-b">
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <Twson></Twson>
    <Three></Three>
    <Fourson></Fourson>
    <Fiveson :floorName='floorName1'  :floor='floor1' ></Fiveson>
    <Fiveson :floorName='floorName2'  :floor='floor2' ></Fiveson>
    <Fiveson :floorName='floorName3'  :floor='floor3'></Fiveson>
    <Hotsale></Hotsale>
 </van-pull-refresh>
 </div>
     </div>  
      </div>
      <div v-if="falg==='0'">
        <div v-for="item in text" :key="item.id">
                 {{item.name}}
        </div>
        </div>
   
      <Baserail></Baserail>
 </div>
</template>

<script>
import BScroll from "better-scroll";
import Navson from '../components/home/Navson'
import Twson from '../components/home/Twson'
import Three from '../components/home/Three'
import Fourson from '../components/home/Fourson'
import Fiveson from '../components/home/Fiveson'
import Hotsale from '../components/home/Hotsale'
import Baserail from '../components/baserail/Baserail'
import { Toast } from 'vant'
 export default {
   name: '',
   props: {
   },
   components: {
   Navson,
   Twson,
   Three,
   Fourson,
   Fiveson,
   Hotsale,
   Baserail
   },
   data () {
     return {
      isLoading: false,
      floor1:[],
      floor2:[],
      floor3:[],
      floorName1:'',
      floorName2:'',
      floorName3:'',
      falg:'1',
      text:[]

     }
   },
   methods: {
 onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    vvs(data){
    this.falg = data
    },
    msg(data){
      this.text = data
     console.log(data);
    }
   },
   mounted() {
    
     this.$api.homeAll()
     .then(res=>{
       this.$store.commit('setrotation',res.data.slides)
       this.$store.commit('setcategory',res.data.category)
       this.$store.commit('setAlltxt',res.data)
       
      //  商品名字
      this.floorName1 = res.data.floorName.floor1
      this.floorName2 = res.data.floorName.floor2
      this.floorName3 = res.data.floorName.floor3
      // 商品数据
      this.floor1 = res.data.floor1
      this.floor2 = res.data.floor2
      this.floor3 = res.data.floor3
     }
     )
     .catch(ree=>{
        console.log(ree)
     })
          new BScroll(this.$refs.Silky,{
            scrollY: true, 
            click: true,
        })
   },
   watch: {

   },
   computed: {
     
   }
 }
</script>

<style scoped lang='scss'>
.box{
  width: 200px;
  height: 20px;
  background: red;
}
.sky{
 height: 650px;
}
.somll-b{
  height: auto;
}
</style>