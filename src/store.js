import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const responses = JSON.parse(localStorage.getItem('responses') || '{}')

const state = {
  responses,
}

const mutations = {
  respond (state, { responseItemId, id }) {
    Vue.set(state.responses, responseItemId, id)
    localStorage.setItem('responses', JSON.stringify(state.responses))
  },
}

export default new Vuex.Store({
  state,
  mutations,
})
