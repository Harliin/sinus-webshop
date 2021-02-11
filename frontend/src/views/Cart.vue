<template>
  <div class="cart">
      <h1>Your Cart</h1>
      <div class="items">
        <header>
          <h4>ITEMS</h4>
          <span class="line"></span>
        </header>
      </div>
      <div class="delivery"></div>
      <div class="payment-details"></div>
  </div>
</template>

<script>
export default {

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
    width: 268px;
    height: 1px;
    border: 1px solid rgba(0, 0, 0, 0.1);
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
      display: flex;
      flex-direction: row;
    }

  }
  .delivery{

  }
  .payment-details{

  }

}
</style>