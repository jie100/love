
<template>
  <div id="page" class="swiper-container">
    <img class="shadow" src="../assets/images/test01/shadow.png">
    <img class="diamond_big" src="../assets/images/test01/diamond_big.png">
    <img class="diamond_s" src="../assets/images/test01/diamond_s.png">

    <img class="diamond_top_right" src="../assets/images/test01/diamond_top_right.png">
    <img class="diamond_left" src="../assets/images/test01/diamond_left.png">
    <img class="diamond_right" src="../assets/images/test01/diamond_right.png">
    <img class="diamond_top_center" src="../assets/images/test01/diamond_top_center.png">
    <img class="bracelet" src="../assets/images/test01/bracelet.png">
    <img class="leaf_left_bottom" src="../assets/images/test01/leaf_left_bottom.png">
    <img class="flower_s" src="../assets/images/test01/flower_s.png">

    <img class="flower" src="../assets/images/test01/flower.png">

    <div class="test_box">
      <img class="test01" src="../assets/images/test01/test01.png">
      <div class="btns">
        <div class="answer01 answer01_a" @click="select(1)"></div>
        <div class="answer01 answer01_b"  @click="select(2)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 10,
      entry: false,
      swiperOption: {}
    };
  },
  mounted() {
    this.entry = true;
    this.progress = 0;
    let timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) {
        clearInterval(timer);
      }
    }, 80);
  },
  methods: {
    select( index ) {
      this.$store.commit('setAnswerId', { index: 1, answerId: index});
      console.log( this.$store.state.answerId_01 );
      //this.$emit('sendInfo', "test02");
      console.log("next test");
    }
  },
  beforeDestroy() {
    this.entry = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flower {
  position: absolute;
  top: 22px;
  left: 34px;
  width: 150px;
}
.flower_s {
  position: absolute;
  top: 0;
  left: 0;
  width: 52px;
}
.test_box {
  position: relative;
  width: 85vw;
  margin: 144px auto 0;
}

.test01 {
  width: 100%;
}

.btns {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 57%;
}

.answer01{
  width: 100%;
  height: 38%;
}

.answer01_b{
  width: 85%;
  margin-top: 5%;
  margin-left: 15%;
}

.bracelet {
  position: absolute;
  bottom: 64px;
  left: 42px;
  width: 186px;
}

.shadow {
  position: absolute;
  bottom: 100px;
  left: 0;
  width: 60px;
}

.diamond_s {
  position: absolute;
  top: 94px;
  right: 58px;
  width: 48px;
}

.diamond_big {
  position: absolute;
  bottom: 32px;
  right: 18px;
  width: 94px;
}

.diamond_top_center {
  position: absolute;
  top: 0;
  left: 160px;
  width: 90px;
}

.diamond_top_right {
  position: absolute;
  top: 0;
  right: 0;
  width: 62px;
}

.leaf_left_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 106px;
}
.diamond_left {
  position: absolute;
  left: 0;
  top: 226px;
  width: 54px;
  z-index: 2;
}
.diamond_right {
  position: absolute;
  right: 0;
  top: 100px;
  width: 56px;
  z-index: 2;
}
.diamond_bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
}
</style>
