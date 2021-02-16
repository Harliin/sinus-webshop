import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
   breakpoints: {
      // default breakpoints - customize this

      laptop: 1250,
      smallDesktop: 1700,
      desktop: Infinity,
   }, // customize this for SSR
});
