<template>
   <div class="cart" :class="$mq">
      <h1>Your Cart</h1>
      <div class="items" :class="$mq">
         <header>
            <h4>ITEMS</h4>
            <span class="line"></span>
         </header>
         <div class="user-cart" :class="$mq">
            <ul>
               <CartItem
                  v-for="(cartItem, index) of cartItems"
                  :key="index"
                  :cartItem="cartItem"
               />
            </ul>
            <span class="dotted-line"></span>
            <div class="total">
               <h4>TOTAL</h4>
               <p>{{ totalPrice }}</p>
            </div>
         </div>
      </div>
      <div class="delivery" :class="$mq">
         <header>
            <h4>DELIVERY</h4>
            <span class="line"></span>
         </header>
         <div class="delivery-form" :class="$mq">
            <label for="name">Name</label>
            <input
               name="name"
               type="text"
               placeholder="Name"
               v-model="user.name"
            />

            <label for="street-adress">Street adress</label>
            <input
               name="street-adress"
               type="text"
               placeholder="Street Adress"
               v-model="user.adress.street"
            />
            <div class="area" :class="$mq">
               <section>
                  <label for="city">City</label>
                  <input
                     type="text"
                     name="city"
                     placeholder="City"
                     v-model="user.adress.city"
                  />
               </section>
               <section>
                  <label for="zip-code">Zip Code</label>
                  <input
                     name="zip-code"
                     type="text"
                     placeholder="Zip Code"
                     v-model="user.adress.zip"
                  />
               </section>
            </div>
         </div>
      </div>
      <div class="payment-details" :class="$mq">
         <header>
            <h4>PAYMENT_DETAILS</h4>
            <span class="line"></span>
         </header>
         <div class="payment-form" :class="$mq">
            <label for="card-owner">Card owner</label>
            <input
               name="card-owner"
               type="text"
               placeholder="Card owner"
               v-model="cardOwner"
            />

            <label for="card-number">Card Number</label>
            <input
               name="card-number"
               type="text"
               placeholder="Card Number"
               v-model="cardNumber"
            />
            <div class="area" :class="$mq">
               <section>
                  <label for="valid">Valid until</label>
                  <input
                     type="text"
                     name="valid"
                     placeholder="Valid until"
                     v-model="validUntil"
                  />
               </section>
               <section>
                  <label for="cvv">CVV</label>
                  <input
                     name="cvv"
                     type="text"
                     placeholder="CVV"
                     v-model="cvv"
                  />
               </section>
            </div>
         </div>
         <button class="buy-btn" @click="sendOrder">
            <img src="@/assets/icon-bag-white.svg" /> Take my money!
         </button>
      </div>
   </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
   components: { CartItem },
   data() {
      return {
         user: {},
         cardOwner: "",
         cardNumber: "",
         validUntil: "",
         cvv: null,
      };
   },
   computed: {
      cartItems() {
         return this.$store.state.Cart;
      },
      cartItemId() {
         let ids = [];
         for (const item of this.cartItems) {
            if (item.counter == 1) {
               ids.push(item._id);
            } else {
               for (let i = 0; i < item.counter; i++) {
                  ids.push(item._id);
               }
            }
         }
         return ids;
      },
      totalPrice() {
         return this.$store.getters.totalPrice;
      },
   },
   methods: {
      sendOrder() {
         console.log("sending order");
         // if(this.cardOwner == "" || this.cardNumber == "" || this.validUntil == "" || this.cvv == null ){
         //   alert("All fields needs to be filled")
         //   return
         // }

         this.$store.dispatch("sendOrder", {
            items: this.cartItemId,
            user: this.$store.state.Token,
         });
         this.$router.push("/orderdone");
      },
   },
   beforeMount() {
      this.user = this.$store.state.LoggedInUser;
   },
};
</script>

<style lang="scss" scoped>
.cart {
   width: 100%;
   height: 90vh;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 20% 80%;
   justify-content: center;
   align-items: center;

   &.smallDesktop, &.laptop{
      grid-template-columns: 50% 50%;
      grid-template-rows: 40% 60%;
      height: 100%;
   }

   header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 1rem;

      .line {
         width: fill;
         height: 1px;
         border: 1px solid rgba(0, 0, 0, 0.6);
         margin-left: 1rem;
      }
      h4 {
         font-weight: normal;
         font-size: 16px;
         color: rgba(0, 0, 0, 0.6);
         text-align: left;
      }
   }

   .items {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      grid-column: 1/2;
      grid-row: 2/3;
      padding: 1rem;

      &.smallDesktop, &.laptop{
         grid-column: 1/3;
         grid-row: 1/2;
         margin-bottom: 3rem;
      }

      .user-cart {
         background-color: white;
         width: 100%;
         min-width: 20rem;
         height: 37rem;
         border-radius: 5px;
         box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
         display: flex;
         flex-direction: column;

         &.smallDesktop, &.laptop{
            width: 100%;
            height: 100%;
         }
      }
      ul {
         list-style: none;
         padding: 1rem;
         width: 100%;
         height: 30rem;
         overflow-x: hidden;
         margin-bottom: 2rem;
      }
      .dotted-line {
         border: 1px dashed rgba(0, 0, 0, 0.6);
         width: 100%;
         margin-bottom: 1rem;
      }
      .total {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         width: 100%;
         padding: 0.5rem;

         h4 {
            font-weight: normal;
            font-size: 18px;
            line-height: 25px;

            color: #000000;
         }
         p {
            font-weight: bold;
            font-size: 18px;
            text-align: right;
            color: black;
         }
      }
   }
   .delivery {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      grid-column: 2/3;
      grid-row: 2/3;
      padding: 1rem;
      padding-left: 2rem;

      &.smallDesktop, &.laptop{
         grid-column: 1/2;
         grid-row: 2/3;
      }
   }
   .delivery-form,
   .payment-form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: left;
      width: fill;

      &.smallDesktop{
         input{
            padding: 0.7rem;
            font-size: 15px;
         }
      }
      &.laptop{
         input{
            padding: 0.4rem;
            
         }
      }
      label {
         align-self: flex-start;
         margin-top: 2rem;
         font-weight: normal;
         font-size: 14px;
         color: rgba(0, 0, 0, 0.6);
         display: block;
      }
      input {
         width: fill;
         padding: 1rem;
         font-size: 18px;
         color: black;
         border-radius: 5px;
         border: 1px solid rgba(0, 0, 0, 0.6);
      }
      .area {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         width: 100%;

         &.smallDesktop, &.laptop{
            width: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
         }
      }
   }
   .payment-details {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      grid-column: 3/4;
      grid-row: 2/3;
      padding: 1rem;
      padding-left: 2rem;

      &.smallDesktop, &.laptop{
         grid-column: 2/3;
         grid-row: 2/3;

         .buy-btn{
            align-self: flex-start;
            margin-left: -9rem;
         }
      }

      .buy-btn {
         align-self: flex-end;
         margin-top: 2rem;
         width: 45%;
      }
   }
}
</style>
