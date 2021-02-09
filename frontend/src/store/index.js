import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Products: null
  },
  mutations: {
    saveProductsList(state, data) {
      state.Products = data
    }
  },
  actions: {
    async getProducts(context) {
      let data = await API.getAllProducts()
      context.commit('saveProductsList', data)
    },
    async login() {
      let user = {"email" :"customer@example.com", "password" :"password"}
      await API.Login(user)
    }
  },
  modules: {
  }
})
