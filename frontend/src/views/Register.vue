<template>
  <div class="register">
      <h1>register</h1>
  </div>
</template>

<script>
export default {
  async beforeCreate(){
    if(await this.$store.getters.loggedIn){
      await this.$router.push('/')
    }
  }

}
</script>

<style>

</style>