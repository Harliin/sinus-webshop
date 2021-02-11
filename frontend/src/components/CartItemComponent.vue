<template>
  <div class="cart-item">
    <img :src="require(`@/assets/${cartItem.imgFile}`)" alt="did not find an image" />
    <div class="details">
      <h5>{{cartItem.title}}</h5>
      <p>{{cartItem.shortDesc}}</p>
      <p class="product-id">{{cartItem._id}}</p>
    </div>
    <p>{{cartItem.price}}</p>
    <div class="item-qty">
      <button class="up-btn"></button>
      <p>1</p>
      <button class="down-btn"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItem: Object,
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
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
  .item-qty {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    p {
      margin: 0;
    }
  }
}
</style>