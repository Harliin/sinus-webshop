<template>
   <div class="login">
      <a class="link" @click="toggleLoginModal">Login</a>
      <div v-if="loginModalOpen" class="login-form">
         <span class="arrow"></span>
         <div class="inputs">
            <input
               type="text"
               v-model="email"
               placeholder="email"
               :class="{ error: wrongCredentials }"
            />
            <input
               type="password"
               v-model="password"
               placeholder="password"
               :class="{ error: wrongCredentials }"
            />
            <p v-if="wrongCredentials">Wrong email or password</p>
            <button @click="login" class="login-btn">Login</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isOpen: false,
         email: "",
         password: "",
         wrongCredentials: false,
      };
   },
   computed: {
      loginModalOpen() {
         return this.$store.state.loginModalOpen;
      },
   },
   methods: {
      async login() {
         await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
         });
         if (!this.$store.state.LoggedIn) {
            await (this.wrongCredentials = true);
         } else {
            this.wrongCredentials = false;
         }
      },
      toggleLoginModal() {
         this.$store.commit("toggleLogin");
      },
   },
};
</script>

<style lang="scss" scoped>
.login {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   .link {
      text-decoration: none;
      font-size: 18px;
      line-height: 25px;
      color: $mainGray;
      font-weight: 600;
      cursor: pointer;
   }

   .login-form {
      background-color: white;
      position: absolute;
      width: 30rem;
      height: 15rem;
      top: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      .arrow {
         margin-top: -0.7rem;
      }

      .inputs {
         display: flex;
         flex-direction: column;
         width: 100%;
         height: 100%;
         align-items: center;
         justify-content: center;
         padding: 1rem;

         input {
            width: 90%;
            margin: 1rem;
            padding: 0.6rem;
            border-radius: 15px;
            border: #9c9c9c solid 2px;
            outline: none;
            font-size: 18px;
         }

         .login-btn {
            background-color: $brightYellow;
            color: $mainGray;
            border-radius: 50px;
            padding: 0.4rem;
            width: 130px;
            height: 40px;
            align-self: flex-end;
            font-size: 18px;
            font-weight: 600;
            border: none;

            &:hover {
               background-color: $darkerYellow;
               box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
            }
         }

         .error {
            border-color: red;
         }

         p {
            color: red;
            align-self: flex-start;
            margin-left: 2rem;
         }
      }
   }
}
</style>
