<template>
   <div class="visitor-cart" :class="$mq">
      <div :class="$mq">
         <h3>Your order</h3>
         <div class="items" :class="$mq">
            <ul>
               <CartItem
                  v-for="(cartItem, index) of cartItems"
                  :key="index"
                  :cartItem="cartItem"
               />
            </ul>
            <div class="line"></div>
            <div class="total-sum">
               <p>TOTAL</p>
               <p>
                  <b>{{ totalPrice }}</b>
               </p>
            </div>
         </div>
      </div>

      <div :class="$mq">
         <h3 class="your-details" :class="$mq">Your details</h3>
         <div class="customer-details" :class="$mq">
            <div class="delivery">
               <header></header>
               <div class="delivery-form">
                  <label for="name">Name</label>
                  <input
                     name="name"
                     type="text"
                     placeholder="Name"
                     v-model="name"
                  />

                  <label for="street-adress">Street adress</label>
                  <input
                     name="street-adress"
                     type="text"
                     placeholder="Street Adress"
                     v-model="street"
                  />
                  <div class="area">
                     <section>
                        <label for="city">City</label>
                        <input
                           type="text"
                           name="city"
                           placeholder="City"
                           v-model="city"
                        />
                     </section>
                     <section>
                        <label for="zip-code">Zip Code</label>
                        <input
                           name="zip-code"
                           type="text"
                           placeholder="Zip Code"
                           v-model="zip"
                        />
                     </section>
                  </div>
               </div>
            </div>
            <div class="payment-details" :class="$mq">
               <header>
                  <h3 class="payment">Payment</h3>
               </header>
               <div class="payment-form">
                  <label for="card-owner">Card owner</label>
                  <input
                     name="card-owner"
                     type="text"
                     placeholder="Card owner"
                  />

                  <label for="card-number">Card Number</label>
                  <input
                     name="card-number"
                     type="text"
                     placeholder="Card Number"
                  />
                  <div class="area">
                     <section>
                        <label for="valid">Valid until</label>
                        <input
                           type="text"
                           name="valid"
                           placeholder="Valid until"
                        />
                     </section>
                     <section>
                        <label for="cvv">CVV</label>
                        <input name="cvv" type="text" placeholder="CVV" />
                     </section>
                  </div>
                  <button class="submit-btn"  @click="sendOrder" :class="{active : cartItems.length <= 0 , $mq}">
                     Take my money!
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
   components: {
      CartItem,
   },
   data() {
      return {
         name: "",
         street: "",
         zip: "",
         city: "",
      };
   },
   computed: {
      cartItems() {
         return this.$store.state.Cart;
      },
      totalPrice() {
         return this.$store.getters.totalPrice;
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
   },
   methods: {
      sendOrder() {
         if (
            this.name == "" ||
            this.street == "" ||
            this.city == "" ||
            this.zip == ""
         ) {
            alert("All Detail fields needs to be filled");
            return;
         }

         this.$store.dispatch("sendOrder", {
            items: this.cartItemId,
            user: this.$store.state.Token,
         });
         this.$router.push("/orderdone");
      },
   },
};
</script>

<style lang="scss" scoped>
.visitor-cart {
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: 50% 50%;
   padding: 5rem;
   padding-bottom: 13rem;

   &.smallDesktop, &.laptop{
      grid-template-columns: 100%;
      grid-template-rows: 40% 60%;
   }

   h3 {
      text-align: left;
      padding-bottom: 1rem;
      font-size: 25px;
   }

   .items {
      width: 70%;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      grid-column: 1/2;
      padding: 1rem;
      background-color: white;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      &.smallDesktop, &.laptop{
         width: 100%;
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
   .your-details{
      &.smallDesktop, &.laptop{
         margin-top: 1rem;
      }
   }

   .customer-details {
      width: 90%;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      grid-column: 2/3;

      &.smallDesktop, &.laptop{
         width: 100%;
         h3{
         margin-top: 1rem;
         }
      }

      .delivery {
         width: 100%;
         height: 100%;
         align-items: center;
      }

      .delivery-form,
      .payment-form {
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         text-align: left;
         width: fill;

         label {
            align-self: flex-start;
            margin-top: 0.8rem;
            font-weight: normal;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
            display: block;
         }
         input {
            width: fill;
            padding: 0.6rem;
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
         }
      }

      .payment-details {
         width: 100%;
         height: 100%;

         &.smallDesktop, &.laptop{
         width: 100%;
         }

         h3 {
            padding-top: 1rem;
            padding-bottom: 0.5px;
         }
      }
   }

   .submit-btn {
      align-self: flex-end;
      margin-top: 2rem;
      width: 45%;



      &.smallDesktop, &.laptop{
         align-self: center;
      }
   }
   .active{
      pointer-events: none;
      background-color: $mainGray;
      color: white;
   }
}
</style>
