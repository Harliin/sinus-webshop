<template>
  <div class="visitor-cart">
    <div>
      <h3>Your order</h3>
      <div class="items">
        <ul>
          <CartItem v-for="(cartItem, index) of cartItems" :key="index" :cartItem="cartItem" />
        </ul>
        <div class="line"></div>
        <div class="total-sum">
          <p>TOTAL</p>
          <p>
            <b>{{totalPrice}}</b>
          </p>
        </div>
      </div>
    </div>
    <div class="customer-details">
      <h3>Your details</h3>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      return this.$store.state.Cart;
    },
    totalPrice() {
      return this.$store.state.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.visitor-cart {
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 3rem;
  margin-left: 10rem;
   margin-right: 10rem;

  h3 {
    text-align: left;
    padding-bottom: 1rem;
    font-size: 25px;
  }

  .items {
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-column: 1/2;
    padding: 1rem;
    background-color: white;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

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

  .customer-details {
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-column: 2/3;
    padding: 1rem;
  }
}
</style>