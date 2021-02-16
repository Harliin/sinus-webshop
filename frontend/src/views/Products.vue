<template>
  <div class="products">
    <ProductItem v-for="item in Products" :key="item._id" :productItem="item" @open="showOverlay" />

      <div v-if="snackbarActive">
        <Snackbar />
      </div>

    <div v-if="overlayOpen">
      <Overlay :show="showModal" @close="closeModal">
        <div class="modal-overlay">
          <div
            class="overlay-image"
            v-bind:style="{
                     'background-image': `url(${require('@/assets/' +
                        `${overlayProduct.imgFile}`)})`,
                  }"
          ></div>
          <div class="overlay-details">
            <h2 class="title">{{ overlayProduct.title }}</h2>
            <p class="short-desc">{{ overlayProduct.shortDesc }}</p>
            <p class="long-desc">{{ overlayProduct.longDesc }}</p>

            <p class="price">{{ overlayProduct.price }} sek</p>

            <button @click.stop="addToCart">
              <img src="../assets/icon-bag-gray.svg" alt="did not find" />
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
import Overlay from "@/components/Overlay.vue";
import Snackbar from "@/components/Snackbar.vue";
export default {
  name: "Products",
  components: {
    ProductItem,
    Overlay,
    Snackbar,
  },
  data() {
    return {
      showModal: false,
      overlayOpen: false,
      snackbarActive: false,
      overlayProduct: {},
    };
  },
  methods: {
    showOverlay(data) {
      this.overlayProduct = null;
      this.overlayProduct = data;
      this.showModal = true;
      this.overlayOpen = true;
    },
    closeModal() {
      this.overlayOpen = false;
      this.showModal = false;
    },
    addToCart() {
      this.overlayOpen = false;
      this.showModal = false;
      this.$store.dispatch("addToCart", this.overlayProduct);
      this.snackbarActive = true;
      setTimeout(() => {
        this.snackbarActive = false;
      }, 2000);
    },
  },
  computed: {
    Products() {
      return this.$store.state.Products;
    },
  },
  async created() {
    await this.$store.dispatch("getProducts");
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(345px, 350px));
  grid-gap: 2rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 1rem 4rem 4rem 4rem;

  .modal-overlay {
    width: 770px;
    height: 500px;
    background-color: white;
    display: grid;
    grid-template-columns: 50% 50%;
    box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.3);

    .overlay-image {
      background-color: #eee;
      background-position: bottom center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .overlay-details {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      text-align: left;
      padding: 1.5rem;

      .short-desc {
        margin-top: -1.8rem;
      }

      .price {
        font-size: 26px;
        font-weight: 700;
        color: black;
      }
    }
  }
}
</style>
