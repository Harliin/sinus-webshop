<template>
   <div class="cart-component">
      <div class="cart-icon">
         <button @click="toggleCart" class="cart-button">
            <img src="~@/assets/icon-bag-gray.svg" alt="kunde inte hitta" />
         </button>
         <div
            v-if="cartCounter > 0"
            class="counter animate__animated animate__bounceIn"
         >
            <p>{{ cartCounter }}</p>
         </div>
      </div>
      <div
         v-if="cartModalOpen"
         class="user-cart animate__animated animate__zoomInDown"
      >
         <span class="arrow"></span>
         <ul>
            <CartItem
               v-for="(cartItem, index) of cartItems"
               :key="index"
               :cartItem="cartItem"
               class="list-items"
            />
         </ul>
         <div class="line"></div>
         <div class="total-sum">
            <p>TOTAL</p>
            <p>
               <b>{{ totalPrice }}</b>
            </p>
         </div>
         <button @click="goToCart">Go to checkout</button>
      </div>
   </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
   components: {
      CartItem,
   },
   methods: {
      toggleCart() {
         this.$store.commit("toggleCart");
      },
      goToCart() {
         this.$store.state.cartModalOpen = false;
         if (this.$store.state.LoggedIn) {
            this.$router.push("/cart");
         } else {
            this.$router.push("/visitorcart");
         }
      },
   },
   computed: {
      cartItems() {
         return this.$store.state.Cart;
      },
      totalPrice() {
         return this.$store.getters.totalPrice;
      },
      cartCounter() {
         let total = 0;
         for (let s of this.$store.state.Cart) {
            total += s.counter;
         }
         return total;
      },
      cartModalOpen() {
         return this.$store.state.cartModalOpen;
      },
   },
};
</script>

<style lang="scss" scoped>
.cart-component {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   .cart-icon {
      display: flex;
      height: 2rem;
   }

   .cart-button {
      width: 30px;
      height: 30px;
      border-radius: 50px;
      background-color: $brightYellow;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;

      &:hover{
         background-color: $darkerYellow;
      }

      img {
         width: 20px;
         height: 20px;
      }
   }

   .counter {
      margin-left: 1.5rem;
      color: black;
      background-color: white;
      height: 1.2rem;
      width: 1.2rem;
      display: flex;
      border-radius: 100px;
      align-items: center;
      justify-content: center;
      position: absolute;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);

      p {
         font-size: 15px;
         font-weight: 600;
      }
   }

   .animate__animated.animate__zoomInDown {
      --animate-duration: 0.7s;
   }
   .user-cart {
      background-color: white;
      position: absolute;
      width: 18rem;
      height: 30rem;
      top: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      .arrow {
         margin-top: -0.7rem;
      }

      ul {
         list-style: none;
         padding: 1rem;
         width: 100%;
         height: 70%;
         overflow-x: hidden;
      }

      .total-sum {
         display: flex;
         justify-content: space-between;
         width: 93%;
         margin: 0.5rem 0.5rem 2.5rem 0.5rem;
      }
   }
}
</style>
