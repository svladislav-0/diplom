import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'
import category from './categorys'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    category
  }
})
