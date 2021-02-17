<template>
   <div class="register" :class="$mq">
      <div class="register-img" :class="$mq">
         <h1>Join the rolling family!</h1>
      </div>
      <div class="information" :class="$mq">
         <h4>Cowabunga</h4>
         <p>
            <b
               >Skate ipsum dolor sit amet, transfer 180 darkslide durometer
               hang up nose grab. Boardslide berm Tracker durometer mongo slap
               maxwell. Blunt bail Christ air Wallows downhill half-cab bruised
               heel. Death box berm McTwist griptape downhill stoked Kevin
               Harris. Jimmy'Z drop in half-flip gnarly hard flip kick-nose
               Tracker.</b
            >
         </p>
         <p>
            Frontside air tailslide fastplant skate key Steve Rocco pogo.
            Frontside air boardslide skater bruised heel melancholy. Pop
            shove-it method air half-cab Tod Swank face plant griptape.
            Handplant salad grind Kevin Harris Bucky Lasek 720 slob air. Invert
            pogo 270 durometer airwalk Chico Brenes. Trucks nose nollie dude
            snake. Chris Buchinsky skater 1080 casper nosebone street.
         </p>
      </div>
      <div class="register-form" :class="$mq">
         <h4>Register</h4>
         <label for="name">Name</label>
         <input v-model="Name" name="name" type="text" />
         <label for="email">Email</label>
         <input v-model="Email" name="email" type="text" />
         <label for="password">Password</label>
         <input v-model="Password" name="password" type="password" />
         <button @click="signUp">Sign up</button>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         Name: "",
         Email: "",
         Password: "",
      };
   },
   methods: {
      async signUp() {
         if(this.Name === "" || this.Email === "" || this.Password === ""){
            alert("fill all the fields")
            return
         }
         await this.$store.dispatch("register", {
            name: this.Name,
            email: this.Email,
            password: this.Password,
            repeatPassword: this.Password,
            adress: {
               street: 'Strandvägen 1',
               zip: '123 45',
               city: 'Stockholm'
            }
         });
         this.resetForm();
         alert("Account created! Log in to see your account details.")
         this.$router.push("/");
      },
      resetForm() {
         this.Name = "";
         this.Email = "";
         this.Password = "";
      },
   },
   async beforeCreate() {
      if (await this.$store.getters.loggedIn) {
         await this.$router.push("/");
      }
   },
};
</script>

<style lang="scss" scoped>
.register {
   display: grid;
   grid-template-columns: 50% 50%;
   grid-template-rows: 55% 45%;
   width: 100%;
   height: 90vh;
   padding-bottom: 2rem;

   &.laptop {
      grid-template-columns: 100%;
      grid-template-rows: 30% 30% 30%;
      height: 120vh;
   }
   .register-img {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      background-image: url("~@/assets/skate-hero-1.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
         color: white;
         font-size: 60px;
      }

      &.laptop {
         grid-column: 1/2;
         grid-row: 1/2;
      }
   }

   .information {
      grid-row: 2/3;
      grid-column: 1/2;
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: space-evenly;
      padding-right: 1rem;

      &.laptop {
         grid-column: 1/2;
         grid-row: 3/4;
      }
   }

   .register-form {
      grid-row: 2/3;
      grid-column: 2/3;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      padding-left: 2rem;
      padding-top: 1rem;

      &.laptop {
         grid-column: 1/2;
         grid-row: 2/3;

         button {
            align-self: center;
         }
      }

      input {
         width: 90%;
         padding: 0.6rem;
         background-color: transparent;
         border: rgb(145, 144, 144) solid 1px;
         border-radius: 5px;
      }

      label {
         color: rgba(0, 0, 0, 0.6);
      }

      button {
         align-self: flex-end;
         border-radius: 50px;
         width: 7rem;
         height: 3rem;
         background-color: $brightYellow;
         color: $mainGray;
         border: none;
         font-size: 20px;
         font-weight: 600;
         margin-right: 10%;

         &:hover {
            background-color: $darkerYellow;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
         }
      }
   }
}
</style>
