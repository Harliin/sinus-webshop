module.exports = {
   css: {
      loaderOptions: {
         sass: {
            prependData: `@import "@/Styles/style.scss";`,
         },
      },
   },
};
