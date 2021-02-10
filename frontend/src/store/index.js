import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Products: null,
    LoggedIn: null
  },
  mutations: {
    saveProductsList(state, data) {
      state.Products = data
    },
    checkLogin(state, data){
      console.log(data[1].token);
      if(data[0].status == 200){
        state.LoggedIn = true
        sessionStorage.setItem("token", data[1].token)
      }
      else{
        state.LoggedIn = false
      }

    }
  },
  actions: {
    async getProducts(context) {
      let data = await API.getAllProducts()
      context.commit('saveProductsList', data)
    },
    async login(context, payload) {
      let data = await API.Login(payload)
      context.commit('checkLogin', data)
    }
  },
  modules: {
  },
  getters:{
    loggedIn: state => {
      let token = sessionStorage.getItem("token")
      if(token){
        state.LoggedIn = true
        return true
      }
      else{
        state.LoggedIn = false
        return false
      }
    }
  }
})
