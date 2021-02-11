import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Products: [],
    LoggedIn: null,
    Cart: [],
    totalPrice: 0
  },
  mutations: {
    saveProductsList(state, data) {
      state.Products = []
      data.forEach(element => {
        let product = {
          _id: element._id, title: element.title, price: element.price,
          shortDesc: element.shortDesc, longDesc: element.longDesc, imgFile: element.imgFile, counter: 1
        }
        state.Products.push(product)
      });
    },
    checkLogin(state, data) {
      console.log(data[1].token);
      if (data[0].status == 200) {
        state.LoggedIn = true
        sessionStorage.setItem("token", data[1].token)
      }
      else {
        state.LoggedIn = false
      }

    },
    addItemToCart(state, item) {
      let productIndex = state.Cart.findIndex(o => o._id == item._id)
      state.totalPrice += item.price
      console.log(state.totalPrice);
      if (productIndex != -1) {
        state.Cart[productIndex].counter++
      } else {
        state.Cart.push(item)
      }
    },
    decrementItem(state, item) {
      let index = state.Cart.findIndex(i => i._id == item)
      state.totalPrice -= state.Cart[index].price
      if (state.Cart[index].counter <= 1 ) {
        state.Cart.splice(index, 1)
      }else{
        state.Cart[index].counter--
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
    },
    async register(_, payload) {
      let data = await API.Register(payload)
      console.log(data);
      alert(data)
    },
    async addToCart(context, payload) {
      console.log(payload);
      context.commit("addItemToCart", payload)
    },
    async decrementItem(context, payload) {
      context.commit("decrementItem", payload)
    }
  },
  modules: {
  },
  getters: {
    loggedIn: state => {
      let token = sessionStorage.getItem("token")
      if (token) {
        state.LoggedIn = true
        return true
      }
      else {
        state.LoggedIn = false
        return false
      }
    }
  }
})
