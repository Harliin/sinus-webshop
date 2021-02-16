<template>
   <div class="snackbar animate__animated animate__bounceInDown">
      <p>Item added to cart</p>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.snackbar {
   position: absolute;
   background-color: $mainGray;
   color: $gold;
   border-radius: 5px;
   height: 3rem;
   padding: 1rem;
   top: 5%;
   left: 50%;
}
</style>
