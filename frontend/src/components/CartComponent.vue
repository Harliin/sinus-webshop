<template>
  <div class="cart-component">
    <button @click="toggleCart" class="cart-button">
      <img src="~@/assets/icon-bag-white.svg" alt="kunde inte hitta" />
    </button>
    <div v-if="isActive" class="user-cart">
      <span class="arrow"></span>
      <h3>Cart</h3>
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
  },
};
</script>

<style lang="scss" scoped>
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
    width: 15rem;
    height: 20rem;
    top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);

    .arrow {
      margin-top: -0.7rem;
    }
  }
}
</style>