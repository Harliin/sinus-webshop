<template>
   <div id="app">
      <Header />
      <router-view class="router-content" />
      <footer class="footer"></footer>
   </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
   components: {
      Header,
   },
   async created() {
      this.$store.dispatch("checkUser");
   },
};
</script>

<style lang="scss">
#app {
   margin-right: auto;
   margin-left: auto;
   height: 100%;
   text-align: center;
   background-color: whitesmoke;
   padding-right: 15vw;
   padding-left: 15vw;
   padding-top: 2rem;

   .router-content {
      padding-top: 2rem;
   }
}

.footer {
   width: 100%;
   height: 300px;
   background-color: $mainGray;
   position: absolute;
   left: 0;
}
</style>
