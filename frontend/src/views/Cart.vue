<template>
  <div class="cart">
      <h1>Your Cart</h1>
      <div class="items">
        <header>
          <h4>ITEMS</h4>
          <span class="line"></span>
        </header>
        <ul>
          <CartItem v-for="(cartItem, index) of cartItems" :key="index" :cartItem="cartItem"/>
        </ul>
      </div>
      <div class="delivery"></div>
      <div class="payment-details"></div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItemComponent.vue'
export default {
  components:{CartItem},
  computed: {
    cartItems() {
      return this.$store.state.Cart;
    },
  },

}
</script>

<style lang="scss" scoped>
.cart{
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20% 80%;
  justify-content: center;
  align-items: center;

  .line{
    width: fill;
    height: 1px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    margin-left: 1rem;
  }
  .items{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    grid-column: 1/2;
    grid-row: 2/3;

    header{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    ul{
      list-style: none;
      padding: 1rem;
      width: 100%;
      overflow-x: hidden;
    }

  }
  .delivery{

  }
  .payment-details{

  }

}
</style>