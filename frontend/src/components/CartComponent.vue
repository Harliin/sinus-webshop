<template>
  <div class="cart-component">
    <button @click="toggleCart" class="cart-button">
      <img src="~@/assets/icon-bag-white.svg" alt="kunde inte hitta" />
    </button>
    <div v-if="isActive" class="user-cart">
      <span class="arrow"></span>
      <ul>
        <li v-for="(cartItem, index) of cartItems" :key="index" class="list-items">
          <img src="~@/assets/hoodie-fire.png" alt="did not find an image" />
          <div class="details">
            <h5>{{cartItem.title}}</h5>
            <p>{{cartItem.shortDesc}}</p>
            <p class="product-id">{{cartItem._id}}</p>
          </div>
          <p>{{cartItem.price}}</p>
        </li>
      </ul>
      <div class="line"></div>
      <div class="total-sum">
        <p>TOTAL</p>
        <p>
          <b>$$$</b>
        </p>
      </div>
      <button @click="goToCart">Go to checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleCart() {
      this.isActive = !this.isActive;
    },
    goToCart() {
      this.$router.push("/Cart");
      this.isActive = false;
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.Cart;
    },
  },
};
</script>

<style  lang="scss" scoped>
.cart-component {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .cart-button {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: #f46969;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;

    img {
      width: 20px;
      height: 20px;
    }
  }

  .user-cart {
    background-color: white;
    position: absolute;
    width: 18rem;
    height: 25rem;
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

      .list-items {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;

        img {
          height: 3.5rem;
          width: 3.5rem;
        }

        .details {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-right: 2.5rem;

          p {
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
          }

          .product-id {
            font-size: 8px;
          }
        }
      }
    }

    .line {
      width: 268px;
      height: 1px;
      border: 1px solid rgba(0, 0, 0, 0.1);
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