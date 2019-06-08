import Vue from "vue";
import Router from "vue-router";
import Loading from "@/components/loading";

//Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "app",
      redirect: '/loading',
    },
    {
      path: "/loading",
      name: "loading",
      component: Loading,
    },
    {
      path: "**",
      redirect: "/"
    }
  ]
});
