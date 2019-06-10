
<template>
  <div id="page">
    <img class="diamond_right" src="../assets/images/loading/diamond_right.png">
    <img class="result_png_bg" src="../assets/images/results/result03_png_bg.png">
    <div class="center">
      <img class="cd rotate" src="../assets/images/results/cd.png">
      <img class="result_cover" src="../assets/images/results/result03_cover.png">
    </div> 
    <img class="result_bg" src="../assets/images/results/result03_bg.jpg">
    <img class="result_btn" @click="getGift" src="../assets/images/results/result_btn.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      entry: false
    };
  },
  mounted() {
    this.entry = true;
  },
  methods: {
    getGift() {
      //this.$emit("sendInfo", "result01");
      console.log("next page");
    }
  },
  beforeDestroy() {
    this.entry = false;
    this.isPlay = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  position: relative;
  margin: 20px auto;
  width: 100%;
  height: 260px;
}
.result_cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 352px;
}
.cd {
  width: 180px;
  margin: 34px 162px;
}
@media screen and (max-width: 321px) {
  .center {
    transform: scale(.8);
  }
}
.diamond_right {
  position: absolute;
  right: 0;
  top: -16px;
  width: 36px;
}
.result_btn {
  position: absolute;
  bottom: 60px;
  right: 30px;
  width: 39.2%;
}
.result_png_bg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
}
.result_bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
