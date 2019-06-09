
<template>
  <div id="page">
    <div class="bg">
      <img class="diamond_right" src="../assets/images/test01/diamond_right.png">
      <img class="bracelet" src="../assets/images/test02/bracelet.png">
      <img class="diamond_m fade_fast" src="../assets/images/test02/diamond_m.png">
      <img class="diamond_s" src="../assets/images/test02/diamond_s.png">
      <img class="diamond_bottom_center" src="../assets/images/test02/diamond_bottom_center.png">
      <!-- <img class="player" src="../assets/images/test02/player.png"> -->
      <img class="diamond_left_bottom" src="../assets/images/test02/diamond_left_bottom.png">
      <img class="player" src="../assets/images/test02/player.png">
      <img class="player" v-if="hasPlay" src="../assets/images/test02/player.gif">
    </div>

    <div class="test_box">
      <img class="number" src="../assets/images/test02/number.png">
      <div class="title_box m-t-10">
        <img
          class="play_btn"
          :class="{'rotate': hasPlay }"
          @click="goPlay"
          src="../assets/images/test02/play_btn.png"
        >
        <img class="title" src="../assets/images/test02/title.png">
        <img class="tip_btn tip" v-if="firstClick" src="../assets/images/test02/tip_btn.png">
      </div>
      <div class="btns_box">
        <img class="tests" src="../assets/images/test02/tests.png">
        <div class="btns">
          <div class="answer answer_a" @click="select"></div>
          <div class="answer answer_b" @click="select"></div>
          <div class="answer answer_c" @click="select"></div>
          <div class="answer answer_d" @click="select"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entry: false,
      firstClick: true,
      hasPlay: false,
      swiperOption: {}
    };
  },
  mounted() {
    this.entry = true;
  },
  methods: {
    goPlay(e) {
      let target = e.target;
      //console.log( target.className );
      if (target.className.search("rotate") > -1) {
        this.hasPlay = false;
      } else {
        this.hasPlay = true;
      }

      this.firstClick = false;
    },
    select() {
      this.$emit("sendInfo", "test03");
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
.test_box {
  position: relative;
  width: 85vw;
  margin: 144px auto 0;
}

.number {
  width: 222px;
  display: block;
  margin: 0 auto;
}

.title_box {
  position: relative;
  width: 90%;
  margin: 10px auto;
}

.play_btn {
  display: inline;
  margin-left: 6px;
  width: 36px;
}

.title {
  display: inline;
  width: 180px;
}

.tip_btn {
  position: absolute;
  top: 50px;
  left: 16px;
  width: 18px;
}

.btns_box {
  width: 300px;
  height: 172px;
  margin-top: 34px;
}

.tests {
  width: 100%;
}

.btns {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 172px;
  overflow: hidden;
}

.answer {
  width: 200px;
  height: 24%;
}

.answer_a {
  margin-left: auto;
}

.answer_b {
  margin-left: 20%;
}

.answer_c {
  margin-left: 15%;
}

/* .player_box {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 256px;
  height: 152px;
} */

.player {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 256px;
}

.bracelet {
  position: absolute;
  top: 55px;
  left: 25px;
  width: 130px;
}

.diamond_m {
  position: absolute;
  top: 90px;
  right: 26px;
  width: 48px;
}

.diamond_s {
  position: absolute;
  bottom: 70px;
  left: 36px;
  width: 42px;
}

.diamond_big {
  position: absolute;
  bottom: 32px;
  right: 18px;
  width: 94px;
}

.diamond_bottom_center {
  position: absolute;
  bottom: 0;
  right: 120px;
  width: 84px;
}

.diamond_right {
  position: absolute;
  top: 24px;
  right: 0;
  width: 56px;
}

.diamond_left_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 46px;
}
</style>
