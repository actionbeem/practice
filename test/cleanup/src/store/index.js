import Vue from 'vue'
import Vuex from 'vuex'
import dummyData from '../assets/input.json'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  state: {
    dummyData: dummyData.items,
  },
})