import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 首页数据
    newProductList: [],
    hotGoods: [],
    topics: [],
    brandList: [],
    floorGoods: [],
    advertiseList: [],
    productCategoryList: []
  },
  mutations: {
    getIndexData (state, res) {
      state.newProductList = res.data.newProductList;
      state.hotGoods = res.data.hotGoodsList;
      state.topics = res.data.topicList;
      state.brandList = res.data.brandList;
      state.floorGoods = res.data.categoryList;
      state.advertiseList = res.data.advertiseList;
      state.productCategoryList = res.data.productCategoryList;
    }
  },
  actions: {
    async getIndexData ({ commit }) {
      const res = await api.getIndexData()
      console.log('vuex取首页的数据getIndexData', res)
      if (res.code !== 200) return
      commit('getIndexData', res)
    }
  }
})

export default store
