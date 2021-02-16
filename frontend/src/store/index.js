import Vue from "vue";
import Vuex from "vuex";
import * as API from "../API";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      Products: [],
      LoggedIn: null,
      LoggedInUser: {},
      Cart: [],
      Token: "",
      loginModalOpen: false,
      cartModalOpen: false,
      adminEditPage: false,
   },
   mutations: {
      saveProductsList(state, data) {
         state.Products = [];
         data.forEach((element) => {
            let product = {
               _id: element._id,
               title: element.title,
               price: element.price,
               shortDesc: element.shortDesc,
               longDesc: element.longDesc,
               imgFile: element.imgFile,
               serial: element.serial,
               counter: 1,
            };
            state.Products.push(product);
         });
      },
      checkLogin(state, data) {
         console.log(data[1]);

         if (data[0].status == 200) {
            state.LoggedIn = true;
            state.LoggedInUser = data[1].user;
            sessionStorage.setItem("token", data[1].token);
            sessionStorage.setItem("user", JSON.stringify(data[1]));
            state.Token = data[1].token;
         } else {
            state.LoggedIn = false;
         }
      },
      addItemToCart(state, item) {
         let productIndex = state.Cart.findIndex((o) => o._id == item._id);
         state.totalPrice += item.price;
         console.log(state.totalPrice);
         if (productIndex != -1) {
            state.Cart[productIndex].counter++;
         } else {
            state.Cart.push(item);
         }
      },
      decrementItem(state, item) {
         let index = state.Cart.findIndex((i) => i._id == item);
         state.totalPrice -= state.Cart[index].price;
         if (state.Cart[index].counter <= 1) {
            state.Cart.splice(index, 1);
         } else {
            state.Cart[index].counter--;
         }
      },
      logOut(state) {
         sessionStorage.removeItem("token");
         sessionStorage.removeItem("user");
         state.LoggedIn = false;
         state.LoggedInUser = {};
        
      },
      resetCart(state, data) {
         if (data[0].status == 200) {
            console.log(data);
            state.Cart = [];
            state.totalPrice = 0;
         } else {
            alert(data[1].message);
         }
      },
      toggleLogin(state) {
         state.loginModalOpen = !state.loginModalOpen;
         state.cartModalOpen = false;
      },
      toggleCart(state) {
         state.cartModalOpen = !state.cartModalOpen;
         state.loginModalOpen = false;
      },
      setData(state, data) {
         state.LoggedInUser = data.user;
         state.Token = data.token;
         state.LoggedIn = true;
      },
      updateProducts(state, data) {
         let index = state.Products.findIndex(
            (product) => product._id == data._id
         );
         if (index >= 0) {
            state.Products[index] = data;
         } else {
            state.Products.push(data);
         }
      },
   },
   actions: {
      async getProducts(context) {
         let data = await API.getAllProducts();
         context.commit("saveProductsList", data);
      },
      async login(context, payload) {
         let data = await API.Login(payload);
         context.commit("checkLogin", data);
      },
      async register(_, payload) {
         await API.Register(payload);
      },
      async addToCart(context, payload) {
         console.log(payload);
         context.commit("addItemToCart", payload);
      },
      async decrementItem(context, payload) {
         context.commit("decrementItem", payload);
      },
      async sendOrder(context, payload) {
         let data = await API.SendOrder(payload);
         context.commit("resetCart", data);
      },
      async LogOut(context) {
         context.commit("logOut");
      },
      async editProduct(context, payload) {
         console.log(payload);
         let data = await API.EditProduct(
            payload.action,
            payload.user,
            payload.product
         );
         if (payload.action == "POST") {
            context.commit("updateProducts", data[1].product);
         } else {
            context.commit("updateProducts", data[1].data);
         }

         alert(data[1].message);
      },
      async deleteProduct(_context, payload) {
         let data = await API.DeleteProduct(payload.user, payload.productId);
         console.log(data);
         alert(data[1].message);
      },
      async checkUser(context) {
         let user = JSON.parse(sessionStorage.getItem("user"));
         if (user) {
            context.commit("setData", user);
         }
      },
   },
   modules: {},
   getters: {
      loggedIn: (state) => {
         if(state.LoggedInUser.role == "customer" || state.LoggedInUser.role == "admin"){
            return true
         }
         else return false
      },
      checkIfAdmin: (state) => {
         if(state.LoggedInUser.role == "admin")return true
         else return false
      },
      totalPrice(state) {
         return state.Cart.reduce(
            (acc, item) => item.price * item.counter + acc,
            0
         );
      },

      getUser: (state) => {
         return state.LoggedInUser;
      },
   },
});
