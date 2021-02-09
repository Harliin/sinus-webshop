<template>
  <div class="login">
    <a class="link">Login</a>
    <div v-if="isOpen" class="login-form">
      <span class="arrow"></span>
      <div class="inputs">
        <input type="text" v-model="username" placeholder="username" />
        <input type="text" v-model="password" placeholder="password" />
        <button @click="login" class="login-btn">Login</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      username: "",
      password: ""
    };
  },
  methods:{
      login(){
          this.$store.dispatch('login')
      }
  }
  
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
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);

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
        border: #9C9C9C solid 2px;
        outline: none;
        font-size: 18px;
      }

      .login-btn{
          background-color: black;
          color: white;
          border-radius: 50px;
          padding: 0.4rem;
          width: 130px;
          height: 40px;
          align-self: flex-end;
          font-size: 18px;
          font-weight: 600;
          border: none;
      }
    }
  }
}
</style>