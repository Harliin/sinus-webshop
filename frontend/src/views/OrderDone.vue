<template>
  <div class="orderDone" :class="$mq">
    <div class="hero">
      <h1>Thank you!</h1>
    </div>

    <div class="info">
      <h1>Your order is being processed, go out and skate while you wait</h1>
      <p>Frontside air tailslide fastplant skate key Steve Rocco pogo. Frontside air boardslide skater bruised heel melancholy. Pop shove-it method air half-cab Tod Swank face plant griptape. Handplant salad grind Kevin Harris Bucky Lasek 720 slob air. Invert pogo 270 durometer airwalk Chico Brenes. Trucks nose nollie dude snake. Chris Buchinsky skater 1080 casper nosebone street.</p>
      <button @click="orderDone">Cool!</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    orderDone(){
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
.orderDone {
  display: grid;
  grid-template-rows: 70% 30%;
  width: 100%;
  height: 90vh;
  padding-bottom: 2rem;

  &.smallDesktop, &.laptop{
    grid-template-rows: 50% 50%;
    height: 110vh;
  }

  .hero {
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
  }

  .info {
    grid-row: 2 / 3;
    text-align: left;
    margin: 2rem 1rem 5rem 1rem;

    h1 {
      color: $mainGray;
    }

    p {
      margin-top: 1rem;
      color: $mainGray;
    }

    button {
      margin-top: 1rem;
    }
  }
}
</style>