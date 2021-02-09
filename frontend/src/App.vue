<template>
  <div id="app">
    <Header /> 
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components:{
    Header
  }
  
}
</script>

<style lang="scss">
@import '@/Styles/font-styles.scss';
@import '@/Styles/normalize.scss';

#app {
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  text-align: center;
  background-color: #EEEEEE;
  background-color: #EEEEEE;
  padding-right: 150px;
  padding-left: 150px;
  padding-top: 2rem;

}



</style>
