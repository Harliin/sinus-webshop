<template>
  <header class="nav">
      <div class="image-container">
          <!-- <img src="../../../assets/sinus-logo.svg" alt="kunde inte hitta"> -->
      </div>
      <div class="routes-container">
        <router-link class="link" to="/" @click.native="filterActive(0)" :class="{active: isActive == 0}">Products</router-link>
        <router-link class="link" to="/register" @click.native="filterActive(1)" :class="{active: isActive == 1}">Register</router-link>
        <!-- <router-link class="link" to="/cart" @click.native="filterActive(2)" :class="{active: isActive == 2}">Cart</router-link>
        <router-link class="link" to="/orderdone" @click.native="filterActive(3)" :class="{active: isActive == 3}">Order Done</router-link> -->
         <Login/>
        <Cart/>
      
      </div>
      
</header>
</template>

<script>
import Cart from '@/components/CartComponent.vue'
import Login from '@/components/LoginComponent.vue'
export default {
    components:{ Cart, Login },
    data(){return{
        isActive: 0
    }},
    methods:{
        filterActive(value){
            console.log("helloo")
            this.isActive = value
        }
    }
}
</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    

    .image-container{
        width: 110px;
        height: 80px;
        background-image: url('../assets/sinus-logo.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        margin-left: 12.5vw;    
    }

    .routes-container{
        width: 25vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 8vw;
        
        .link{
            text-decoration: none;
            font-size: 18px;
            line-height: 25px;
            color: black;
            font-weight: 500;

        }
            .active{
                font-weight: 600;
                text-decoration: underline;
            }
    }

}

</style>