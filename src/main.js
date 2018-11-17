/* eslint-disable no-console */
import Vue from "vue";
import VueResource from "vue-resource";
import router from "./router";
import App from "./App";

Vue.use(VueResource);
//Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render(h) {
    return h(App);
  }
}).$mount("#app");
