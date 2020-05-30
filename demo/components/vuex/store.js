import Vue from 'vue'
import Vuex from 'vuex'
import commandActions from './action/action'
import apiRequest from './action/api-requests'
import mutations from './mutations/mutation'
import getters from './getters/getters'

const actions = { ...commandActions, ...apiRequest }

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    users: []
  },
  mutations,
  actions,
  getters,
  modules: {}
})
