<template>
  <div class="account">
    <div class="account-details" :class="$mq">
      <section class="image" :class="$mq"></section>

      <button @click="edit = !edit" class="edit" :class="$mq">Edit</button>

      <section class="form name" :class="$mq">
        <label for="name">Name</label>
        <input type="text" :class="{active : edit}" v-model="user.name" name="name" />

        <label for="email">Email</label>
        <input type="text" :class="{active : edit}" v-model="user.email" name="email" />
      </section>

      <section class="form adress" :class="$mq">
        <label for="adress">Street adress</label>
        <input type="text" :class="{active : edit}" v-model="user.adress.street" name="adress" />

        <div class="city-zip">
          <section>
            <label for="city">City</label>
            <input type="text" :class="{active : edit}" v-model="user.adress.city" name="city" />
          </section>

          <section>
            <label for="zip">Zip code</label>
            <input type="text" :class="{active : edit}" v-model="user.adress.zip" name="zip" />
          </section>
        </div>
      </section>
      <div class="order-history" :class="$mq">
        <h3>Order history</h3>
        <ul>
          <li
            class="list-item"
            v-for="(order, index) in user.orderHistory"
            :key="index"
          >Order {{index +1}}: {{order}}</li>
        </ul>
      </div>
      <button @click="logOut" class="log-out" :class="$mq">Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      user: {},
    };
  },
  beforeMount() {
    this.user = this.$store.getters.getUser;
  },
  methods: {
    logOut() {
      this.$store.dispatch("LogOut");
      this.$router.push("/");
      this.$store.state.Cart = [];
      this.$store.state.totalPrice = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.account {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 90% auto;
  grid-template-rows: auto 90% auto;
  padding: 1rem;

  .account-details {
    grid-column: 2/3;
    grid-row: 2/3;
    width: 100%;
    height: 90%;
    background-color: whitesmoke;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 40% 45% 15%;

    &.smallDesktop, &.laptop{
      grid-template-rows: 30% 30% 30% 10%;
    }

    .image {
      grid-column: 1/3;
      grid-row: 1/2;
      background-image: url(../assets/icon-user-black.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 200px;
      height: 200px;
      border-radius: 200px;
      background-color: white;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
      place-self: center;

      &.smallDesktop, &.laptop{
        grid-column: 1/5;
        grid-row: 1/2;
        width: 150px;
        height: 150px;
        margin-bottom: 15px;
      }
      // &.laptop{
      //   grid-column: 1/5;
      //   grid-row: 1/2;
      //   width: 150px;
      //   height: 150px;
      //   margin-bottom: 15px;
      // }
    }

    .edit {
      grid-row: 1/2;
      grid-column: 2/3;
      place-self: end;
      width: 6rem;
      height: 2rem;
      border-radius: 5px;
      margin-right: 1rem;
      background-color: $mainGray;
      color: $brightYellow;
      font-weight: 400;

      &.smallDesktop, &.laptop{
        grid-column: 1/5;
        grid-row: 1/2;
        place-self: bottom;
        justify-self: center;
         margin-right: 0rem;
      }
      
    }

    .name {
      grid-row: 2/3;
      grid-column: 1/2;

      &.smallDesktop, &.laptop{
        grid-column: 1/3;
        grid-row: 2/3;
      }
    }

    .adress {
      grid-row: 2/3;
      grid-column: 2/3;

      &.smallDesktop, &.laptop{
        grid-column: 3/5;
        grid-row: 2/3;
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      padding: 1rem;

      &.smallDesktop, &.laptop{
        width: 80%;
        height: 80%;
        padding: 1.5rem;

        label{
          margin-top: 0rem;
        }
        input{
          margin-bottom: 1rem;
        }
      }

      .active {
        border: 2px solid $brightYellow;
        pointer-events: all;
        outline: none;
      }

      label {
        align-self: flex-start;
        color: $mainGray;
        font-size: 18px;
        font-weight: 600;
        margin-top: 3rem;
      }

      input {
        padding: 0.5rem;
        border-radius: 5px;
        pointer-events: none;
      }

      .city-zip {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          input {
            width: 99%;
          }
        }
      }
    }

    .order-history {
      grid-column: 3/5;
      grid-row: 1/3;
      display: flex;
      flex-direction: column;
      background-color: white;
      color: $mainGray;
      align-items: flex-start;
      justify-content: flex-start;
      place-self: center;
      width: 70%;
      height: 90%;
      margin-top: 5rem;
      border-radius: 10px;

      &.smallDesktop, &.laptop{
      grid-column: 1/5;
      grid-row: 3/4;
      margin-top: 0px;
      width: 90%;
      
      }

      h3 {
        margin-left: 1rem;
        color: $mainGray;
      }

      ul {
        list-style: none;
        height: 80%;
        overflow: auto;
        width: 100%;

        .list-item {
          margin-left: 1rem;
          margin-top: 1.5rem;
          text-align: left;
          font-size: 20px;
        }
      }
    }

    .log-out {
      grid-row: 3/4;
      grid-column: 2/4;
      place-self: center;
      background-color: #F56969;;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);

      &.smallDesktop, &.laptop{
        grid-column: 1/5;
        grid-row: 4/5;
      }
    }
  }
}
</style>
