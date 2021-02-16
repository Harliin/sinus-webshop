<template>
   <header class="nav">
      <div class="image-container">
         <!-- <img src="../../../assets/sinus-logo.svg" alt="kunde inte hitta"> -->
      </div>
      {{ $mq }}
      <div class="routes-container " :class="$mq">
         <router-link
            class="link"
            to="/"
            @click.native="filterActive(0)"
            :class="{ active: isActive == 0 }"
            >Products</router-link
         >
         <router-link
            v-if="!userLoggedIn"
            class="link"
            to="/register"
            @click.native="filterActive(1)"
            :class="{ active: isActive == 1 }"
            >Register</router-link
         >
         <router-link
            v-if="userLoggedIn"
            class="link"
            to="/myaccount"
            @click.native="filterActive(2)"
            :class="{ active: isActive == 2 }"
            >My Account</router-link
         >
         <router-link
            class="link"
            v-if="userAdmin"
            to="/adminproducts"
            @click.native="filterActive(3)"
            :class="{ active: isActive == 3 }"
            >Admin Products</router-link
         >
         <!-- <router-link class="link" to="/cart" @click.native="filterActive(2)" :class="{active: isActive == 2}">Cart</router-link>
        <router-link class="link" to="/orderdone" @click.native="filterActive(3)" :class="{active: isActive == 3}">Order Done</router-link> -->
         <Login v-if="!userLoggedIn" />
         <Cart />
      </div>
   </header>
</template>

<script>
import Cart from "@/components/CartPopUp.vue";
import Login from "@/components/LoginComponent.vue";
export default {
   components: { Cart, Login },
   data() {
      return {
         isActive: 0,
      };
   },
   methods: {
      filterActive(value) {
         console.log("helloo");
         this.isActive = value;
      },
   },
   computed: {
      userLoggedIn() {
         return this.$store.state.LoggedIn;
      },
      userAdmin() {
         if (this.$store.state.LoggedInUser.role == "admin") {
            return true;
         } else {
            return false;
         }
      },
   },
   async beforeCreate() {
      await this.$store.getters.loggedIn;
   },
};
</script>

<style lang="scss" scoped>
.nav {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;

   .image-container {
      width: 110px;
      height: 80px;
      background-image: url("../assets/sinus-logo.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
   }

   .routes-container {
      width: 25vw;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &.laptop {
         width: 45vw;
      }
      &.smallDesktop {
         width: 35vw;
      }

      .link {
         text-decoration: none;
         font-size: 18px;
         line-height: 25px;
         color: $mainGray;
         font-weight: 600;
      }
      .active {
         font-weight: 600;
         text-decoration: 3px underline $gold;
      }
   }
}
</style>
