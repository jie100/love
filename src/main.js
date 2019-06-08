// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import iView from 'iview';

import 'iview/dist/styles/iview.css';

import VueTouch from"vue-touch";
import "./assets/css/animate.min.css";
import "./assets/css/index.css";

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueTouch, {name:'v-touch'})

const app = new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount("#app");
