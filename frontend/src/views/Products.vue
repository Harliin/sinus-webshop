<template>
  <div class="products">
    <ProductItem v-for="(item, index) of Products" :key="index" :productItem="item"/>
    
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  name: "Products",
  components: {
    ProductItem,
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
}
</style>