<template>
   <div class="account">
      <div class="account-details">
         <div class="user-info">
            <section class="image"></section>
            <h3>Person perssonson</h3>
         </div>
      </div>
   </div>
</template>

<script>
export default {};
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
      background-color: $mainGray;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.7);
      border-radius: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 85% 15%;

      .image {
         background-image: url(../assets/icon-user-black.svg);
         background-size: contain;
         background-repeat: no-repeat;
         background-position: center;
         width: 250px;
         height: 250px;
         border-radius: 200px;
         background-color: white;
         box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
      }

      .user-info {
         display: flex;
         flex-direction: column;
         justify-content: space-evenly;
         align-items: center;
      }
   }
}
</style>
