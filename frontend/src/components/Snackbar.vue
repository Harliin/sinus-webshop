<template>
   <div class="snackbar animate__animated animate__bounceInDown" >
      <slot></slot>
   </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.snackbar {
   position: fixed;
   background-color: $mainGray;
   color: $gold;
   border-radius: 5px;
   height: 3rem;
   padding: 1rem;
   top: 5%;
   left: 50%;
}
</style>
