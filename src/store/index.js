import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 地位城市
    city:'',
    // 轮播图
    rotation:[],
    // 分类
    category:[],
    // 全部
    Alltxt:{},
    // 购物车
    shopList:[],
   cartNum:0,
  },
  mutations: {
    setCity(state,data){
      state.city=data
    },
    setrotation(state,data){
      state.rotation=data
    },
    setcategory(state,data){
      state.category=data
    },
    setAlltxt(state,data){
      state.Alltxt=data
    },
    shop(state,data){
      state.shopList=data
    },
    setShopList(state,data){
      state.shopList = data
    },
    setCartNum(state,data){
      state.cartNum =data
    },
    addCartNum(state){
      state.cartNum += 1
    }

  },
  actions: {
  },
  modules: {
  }
})
