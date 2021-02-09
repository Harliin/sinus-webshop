<template>
  <div class="products">
    <ProductItem v-for="item in Products" :key="item._id" :productItem="item" @open="showOverlay"/>
    <div v-if="overlayOpen">
      <Overlay :show="showModal" @close="showModal = false">
        <div class="modal-overlay">
          <div class="overlay-image">
            <h1>knd</h1>
          </div>
          <div class="overlay-details">
            <h2 class="title">{{overlayProduct.title}}</h2>
            <p class="short-desc">{{overlayProduct.shortDesc}}</p>
            <p class="long-desc">{{overlayProduct.longDesc}}</p>

            <p class="price">{{overlayProduct.price}} sek</p>

            <button class="button"><img src="../assets/icon-bag-white.svg" alt="did not find">
             Take my money
             </button>
          </div>
        </div>
      </Overlay>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import Overlay from '@/components/Overlay.vue'
export default {
  name: "Products",
  components: {
    ProductItem,
    Overlay
  },
  data(){return{
    showModal: false,
    overlayOpen: false,
    overlayProduct: {}
  }},
  methods:{
    showOverlay(data){
      console.log(data);
      this.overlayProduct = null
      this.overlayProduct = data
      this.showModal = true
      this.overlayOpen = true
    }
  },
  computed:{
    Products(){
      return this.$store.state.Products
    }
  },
  async created(){
    await this.$store.dispatch('getProducts')
  }
};
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(345px, 350px));
    grid-gap: 1rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    align-items: center;
    justify-items: center;
    justify-content: center;

    .modal-overlay{
      width: 770px;
      height: 500px;
      background-color: white;
      display: grid;
      grid-template-columns: 50% 50%;


      .overlay-image{
        background-color: #EEE;
      }
      .overlay-details{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        padding: 1.5rem;
        
        .title{
          
        }
      }
    }
}
</style>