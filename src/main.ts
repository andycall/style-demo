// import "core-js/modules/es.string.replace-all";
import Vue from "vue";
import App from "./App.vue";
// import NoAuth from "./NoAuth.vue";
import router from "./router";
// import Vconsole from "vconsole";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
