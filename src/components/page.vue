
<template>
  <v-touch @swipeleft="handler" class="wrapper">
    <transition
      name="component-fade"
      enter-active-class="animated bounceInRight delay-0s"
      leave-active-class="animated bounceOutLeft"
    >
      <component v-bind:is="view" @sendInfo="getInfo"></component>
    </transition>
    <process v-if="testNumber && testNumber.indexOf('test')>-1 " :progress=" testNumber "></process>
  </v-touch>
</template>

<script>
import Loading from "./loading";
import Home from "./home";
import Process from "./process";
import Test01 from "./test01";
import Test02 from "./test02";
import Test03 from "./test03";

const loading = Loading;
const home = Home;
const test01 = Test01;
const test02 = Test02;
const test03 = Test03;

export default {
  components: {
    loading,
    home,
    process: Process,
    test01,
    test02,
    test03
  },
  data() {
    return {
      testNumber: "",
      view: test03,
      loadEnded: false
    };
  },
  mounted() {},
  methods: {
    handler() {
      if (this.loadEnded) {
        this.view = home;
        this.loadEnded = false;
      }
    },
    //接收子组件发送过来信息，用来判断下一步走向
    getInfo(data) {
      console.log(data);
      switch (data) {
        case 100:
          this.loadEnded = true;
          break; //loading完成
        default:
          this.testNumber = data;
          this.view = data; //跳至对应组件
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
/* 
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
  transform: translateX( -100% ) rotateX( 45deg );
} */
</style>
