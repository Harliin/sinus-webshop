<template>
   <div class="product-container">
      <div v-if="snackbarActive">
         <Snackbar>
                 <p>Item added to cart</p>
         </Snackbar>
      </div>
      <div class="header">
         <h2 @click="showOverlay" class="product-name">
            {{ productItem.title }}
         </h2>
         <button v-if="!adminPage" @click="addToCart" class="icon">
            <img src="@/assets/icon-bag-gray.svg" alt />
         </button>
         <button v-if="adminPage" @click="editProduct" class="icon">
            <img src="@/assets/icon-edit-white.svg" alt="did not find" />
         </button>
      </div>
      <p @click="showOverlay" class="short-desc">{{ productItem.shortDesc }}</p>
      <div
         @click="showOverlay"
         class="img-container"
         v-bind:style="{
            'background-image': `url(${require('@/assets/' +
               `${productItem.imgFile}`)})`,
         }"
      >
         <span @click="showOverlay" class="price">
            <p class="amount">{{ productItem.price }}</p>
            <p class="currency">SEK</p>
         </span>
      </div>
   </div>
</template>

<script>
import Snackbar from "@/components/Snackbar.vue";

export default {
   data() {
      return {
         snackbarActive: false,
      };
   },
   components: { Snackbar },
   props: {
      productItem: Object,
   },
   methods: {
      showOverlay() {
         this.$emit("open", this.productItem);
      },
      addToCart() {
         this.$store.dispatch("addToCart", this.productItem);
         this.snackbarActive = true;
         setTimeout(() => {
            this.snackbarActive = false;
         }, 2000);
      },
      editProduct() {
         this.$emit("editProduct", this.productItem);
      },
   },
   computed: {
      adminPage() {
         var currentUrl = this.$route;
         if (currentUrl.path == "/adminproducts") {
            return true;
         } else {
            return false;
         }
      },
   },
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
   box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);

   .modal-overlay {
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
         width: 40px;
         height: 40px;
         border-radius: 50px;
         background-color: $brightYellow;
         border: none;
         outline: none;
         display: flex;
         justify-content: center;
         align-items: center;

         &:hover {
            background-color: $darkerYellow;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
         }
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
         background-color: $gold;
         width: 122px;
         height: 47px;
         border-radius: 30px;
         color: $mainGray;
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
