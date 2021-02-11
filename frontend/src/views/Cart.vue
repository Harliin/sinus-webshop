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
        <span class="dotted-line"></span>
        <div class="total">
          <h4>TOTAL</h4>
          <p>{{totalPrice}}</p>
        </div>
      </div>
      <div class="delivery">
        <header>
          <h4>DELIVERY</h4>
          <span class="line"></span>
        </header>
      </div>
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
    totalPrice(){
      return this.$store.state.totalPrice
    }
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

  header{ 
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 1rem;

      .line{
    width: fill;
    height: 1px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    margin-left: 1rem;
    }
    h4{
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: rgba(0, 0, 0, 0.6);
    }
  }
  
  .items{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 1rem;
    

    
    ul{
      list-style: none;
      padding: 1rem;
      width: 100%;
      height: 30rem;
      overflow-x: hidden;
      overflow-y: hidden;
      margin-bottom: 2rem;
    }
    .dotted-line{
      border: 1px dashed rgba(0, 0, 0, 0.6);
      width: fill;
      margin-bottom: 1rem;
    }
    .total{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      h4{
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;

        color: #000000;
      }
      p{
        font-weight: bold;
        font-size: 18px;
        text-align: right;
        color: black;
      }
    }

  }
  .delivery{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 1rem;
  }
  .payment-details{

  }

}
</style>