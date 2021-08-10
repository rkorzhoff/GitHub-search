import Vue from 'vue'
import Vuex from 'vuex'
import Items from '@/store/modules/items'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Items
  }
})
