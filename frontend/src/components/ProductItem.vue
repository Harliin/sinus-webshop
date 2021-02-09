<template>
  <div class="product-container" @click="showModal = true">
    <Overlay :show="showModal" @close="showModal = false">
      <div class="modal-overlay">
        <h2>{{productItem.title}}</h2>
      </div>
    </Overlay>
    <div class="header">
      <h2 class="product-name">{{productItem.title}}</h2>
      <button class="icon">
        <img src="@/assets/icon-bag-black.svg" alt />
      </button>
    </div>
    <p class="short-desc">{{productItem.shortDesc}}</p>
    <div
      class="img-container"
      v-bind:style="{ 'background-image': `url(${require('@/assets/' + `${productItem.imgFile}`)})`}">
      <span class="price">
        <p class="amount">{{productItem.price}}</p>
        <p class="currency">SEK</p>
      </span>
    </div>
    
  </div>
</template>

<script>
import Overlay from '@/components/Overlay.vue'
export default {
  components:{
    Overlay
  },
  // methods:{
  //   closeModal(){
  //     this.showModal = false
  //   }
  // },
  data(){return{
    showModal: false
  }},
  props:{
    productItem: Object
  }
};
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

  .modal-overlay{
    width: 30vw;
    height: 30vh;
    background-color: white;
  }
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