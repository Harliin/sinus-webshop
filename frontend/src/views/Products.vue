<template>
  <div class="products">
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  name: "Products",
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 400px));
    grid-gap: 0.5rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
</style>