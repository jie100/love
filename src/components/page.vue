
<template>
  <v-touch @swipeleft="handler" class="wrapper">
    <!-- <transition
      name="component-fade"
      enter-active-class="animated bounceInRight delay-0s"
      leave-active-class="animated bounceOutLeft"
    > -->
    <transition
      name="component-fade"
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
import Test04 from "./test04";
import Test05 from "./test05";
import Result01 from "./result01";
import Result02 from "./result02";
import Result03 from "./result03";
import Result04 from "./result04";
import Result05 from "./result05";
import Upload from "./upload";

const loading = Loading;
const home = Home;
const test01 = Test01;
const test02 = Test02;
const test03 = Test03;
const test04 = Test04;
const test05 = Test05;
const result01 = Result01;
const result02 = Result02;
const result03 = Result03;
const result04 = Result04;
const result05 = Result05;
const upload = Upload;

export default {
  components: {
    loading,
    home,
    process: Process,
    test01,
    test02,
    test03,
    test04,
    test05,
    result01,
    result02,
    result03,
    result04,
    result05,
    upload
  },
  data() {
    return {
      view: test01,
      loadEnded: false,
      testNumber: "",
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
          this.testNumber = data; //进度提示
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

.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
  transform: translateX( -100% ) rotateX( 45deg );
}
</style>
