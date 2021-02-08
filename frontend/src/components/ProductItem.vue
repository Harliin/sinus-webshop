<template>
  <div class="product-container">
    <div class="header">
      <h2 class="product-name">Greta</h2>
      <button class="icon">
        <img src="@/assets/icon-bag-black.svg" alt />
      </button>
    </div>
    <p class="short-desc">Unisex</p>
    <div
      class="img-container"
      v-bind:style="{ 'background-image': `url(${require('@/assets/hoodie-fire.png')})`}"
    >
      <span class="price">
        <p class="amount">799</p>
        <p class="currency">SEK</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  height: 520px;
  width: 344px;
  padding-top: 1rem;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);


  .header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;

    .product-name {
      font-size: 32px;
      font-weight: 700;
    }

    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50px;
      background-color: #eee;
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  .short-desc {
    align-self: flex-start;
    margin: 0.3rem 0px 0px 2rem;
    font-size: 17px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
  }

  .img-container {
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;

    .price {
      display: flex;
      flex-direction: row;
      background-color: black;
      width: 122px;
      height: 47px;
      border-radius: 30px;
      color: white;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
      margin-bottom: 2rem;

      .amount {
        font-size: 28px;
        font-weight: 700;
      }

      .currency {
        font-size: 14px;
        font-weight: 400;
        margin-top: -4px;
        margin-left: 5px;
      }
    }
  }
}
</style>