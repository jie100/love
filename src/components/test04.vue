
<template>
  <div id="page">
    <div class="bg">
      <img class="diamond_right" src="../assets/images/test01/diamond_right.png">
      <img class="diamond_left" src="../assets/images/test04/diamond_left.png">
      <img class="diamond_left_bottom" src="../assets/images/test04/diamond_left_bottom.png">
      <img class="ticket" src="../assets/images/test04/ticket.png">
      <!-- <img class="birds" src="../assets/images/test04/birds.png"> -->
      <img class="birds" src="../assets/images/test04/birds.gif">
      <img
        class="leaf_bottom"
        :class="{skew_bottom:entry}"
        src="../assets/images/loading/leaf_bottom.png"
      >
    </div>

    <div class="test_box">
      <img class="title" src="../assets/images/test04/title.png">
      <div class="options">
        <div class="option option01" @click="select(1)"></div>
        <div class="option option02" @click="select(2)"></div>
        <div class="option option03" @click="select(3)"></div>
        <div class="option option04" @click="select(4)"></div>
        <div class="option option05" @click="select(5)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entry: false,
      isPlay: false,
      play: [false, false, false]
    };
  },
  mounted() {
    this.entry = true;
  },
  methods: {
    goPlay(e, index) {
      let target = e.target;
      console.log(target.className);
      console.log(this.play);
      if (target.className.search("rotate") > -1) {
        this.play = [false, false, false];
        this.isPlay = false;
      } else {
        this.play = [false, false, false];
        this.play[index] = true;
        this.isPlay = true;
      }
      console.log(this.play);
    },

    select(answerId) {
      this.$store.commit("setAnswerId", { index: 2, answerId: answerId });
      console.log(this.$store.state.answerId_01);
      console.log(this.$store.state.answerId_04);
      this.$emit("sendInfo", "test05");
      console.log("next test");
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
.leaf_bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 106px;
}
.diamond_right {
  position: absolute;
  right: 0;
  top: 90px;
  width: 56px;
}
.ticket {
  position: absolute;
  left: 0;
  top: 42px;
  width: 77px;
  z-index: 2;
}
.diamond_left {
  position: absolute;
  left: 0;
  bottom: 150px;
  width: 30px;
}
.diamond_left_bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
}

.test_box {
  position: absolute;
  left: 60px;
  top: 50px;
  width: 280px;
}
.title {
  width: 260px;
}
.options {
  position: relative;
  margin-top: 40px;
  width: 280px;
  height: 226px;
  background-image: url("../assets/images/test04/options.png");
  background-size: 100% 100%;
}
.option{
  width: 76px;
  height: 50%;
  float: left;
}
.option04{
  margin-left: 45px;
}
.option02,.option03,.option05{
  margin-left: 24px;
}
.birds{
  position: absolute;
  bottom: 0;
  right: 0;
  /* width: 320px;
  height: 520px;
   */
  width: 85vw;
  
}
</style>
