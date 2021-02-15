<template>
  <div class="admin-products">
    <h1>Admin Products</h1>
    <div class="line"></div>
    <div class="add-product">
      <button class="add-btn" @click="addProduct">Add product</button>
    </div>

    <div class="products-list">
      <ProductItem
        v-for="item in Products"
        :key="item._id"
        :productItem="item"
        @editProduct="openModal"
      />
    </div>
    <div v-if="overlayOpen" class="overlay-modal">
      <Overlay :show="overlayOpen">
        <div class="modal-overlay">
          <div
            class="product-img"
            v-bind:style="{
                     'background-image': `url(${require('@/assets/' +
                        `${overlayProduct.imgFile}`)})`,
                  }"
          ></div>
          <div class="product-details">
            <label for="name">Product name</label>
            <input type="text" name="name" v-model="overlayProduct.title" />

            <label for="short-desc">Product short desc</label>
            <input type="text" name="short-desc" v-model="overlayProduct.shortDesc" />

            <label for="price">Product Price</label>
            <input type="text" name="price" v-model="overlayProduct.price" />

            <label for="serial">Product Serial</label>
            <input type="text" name="serial" v-model="overlayProduct.serial" />

            <label for="image">Product Image</label>
            <select v-model="overlayProduct.imgFile" name="image">
              <option default value="skateboard-generic.png">Skateboard Generic</option>
              <option value="hoodie-ash.png">Hoodie Ash</option>
              <option value="hoodie-fire.png">Hoodie Fire</option>
              <option value="skateboard-greta.png">Skateboard Greta</option>
              <option value="wheel-rocket.png">Wheel Rocket</option>
              <option value="wheel-spinner.png">Wheel Spinner</option>
              <option value="wheel-wave.png">Wheel Wave</option>
            </select>
          </div>
          <div class="product-desc">
            <label for>Product description</label>
            <textarea type="text" name="name" v-model="overlayProduct.longDesc" />
          </div>
          <div class="buttons">
            <button v-if="newProduct" @click="editProduct('POST')">Add</button>
            <button v-if="!newProduct" @click="editProduct('PATCH')">Update</button>
            <button v-if="!newProduct" @click="deleteProduct">Delete</button>
            <button @click="closeModal">Cancel</button>
          </div>
        </div>
      </Overlay>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import Overlay from "@/components/Overlay.vue";
export default {
  components: { ProductItem, Overlay },
  data() {
    return {
      overlayOpen: false,
      overlayProduct: {
        title: "",
        shortDesc: "",
        price: 0,
        serial: "",
        imgFile: "skateboard-generic.png",
        longDesc: "",
        _id: "",
      },

      newProduct: false,
    };
  },
  methods: {
    openModal(item) {
      console.log("opening overlay");
      this.overlayOpen = true;
      this.overlayProduct = { ...item };
    },
    closeModal() {
      this.overlayOpen = false;
      this.overlayProduct = {
        title: "",
        shortDesc: "",
        price: null,
        serial: "",
        imgFile: "skateboard-generic.png",
        longDesc: "",
        _id: "",
      };
    },
    addProduct() {
      this.overlayOpen = true;
      this.newProduct = true;
    },
    async editProduct(Action) {
      if ((await this.checkForm) == false) {
        alert("Fill all fields");
        return;
      }

      let user = this.$store.state.Token;
      let payload = {
        action: Action,
        user: user,
        product: this.overlayProduct,
      };
      await this.$store.dispatch("editProduct", payload);
      await this.$store.dispatch("getProducts");
      this.overlayOpen = false;
    },
    async deleteProduct() {
      let payload = {
        user: this.$store.state.Token,
        productId: this.overlayProduct._id,
      };
      await this.$store.dispatch("deleteProduct", payload);
      await this.$store.dispatch("getProducts");
      this.overlayOpen = false;
    },
    async checkForm() {
      if (
        this.overlayProduct.title == "" ||
        this.overlayProduct.shortDesc == "" ||
        this.overlayProduct.price == null ||
        this.overlayProduct.serial == "" ||
        this.overlayProduct.longDesc == ""
      ) {
        return false;
      } else {
        return true;
      }
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
.admin-products {
  width: 100%;

  .line {
    width: 100%;
    margin-top: 2rem;
  }

  .add-product {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    position: relative;

    .add-btn {
      background: #f56969;
    }
  }

  .products-list {
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
  }

  .modal-overlay {
    width: 1300px;
    height: 700px;
    background-color: whitesmoke;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 85% 15%;
    box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    .product-img {
      height: 100%;
      width: 100%;
      background-color: #eee;
      background-position: bottom center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .product-details {
      grid-column: 2/3;
      grid-row: 1/2;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      label {
        align-self: flex-start;
        margin-bottom: -25px;
        font-size: 18px;
        font-weight: 500;
        color: $mainGray;
      }
      input {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid $mainGray;
        font-size: 16px;
      }
      select {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid $mainGray;
        font-size: 16px;
      }
    }
    .product-desc {
      grid-column: 3/4;
      grid-row: 1/2;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 1rem;
      padding-top: 2rem;

      label {
        align-self: flex-start;
        margin-bottom: 0.8rem;
        font-size: 18px;
        font-weight: 500;
        color: $mainGray;
      }
      textarea {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid $mainGray;
        width: 100%;
        height: 90%;
        font-size: 16px;
      }
    }

    .buttons {
      grid-column: 1/4;
      grid-row: 2/3;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
</style>
