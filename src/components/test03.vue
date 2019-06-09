
<template>
  <div id="page">
    <div class="bg">
      <img class="wheel_l" src="../assets/images/test03/wheel_l.png">
      <img class="wheel_s" src="../assets/images/test03/wheel_s.png">
      <img class="leaf_top" src="../assets/images/test03/leaf_top.png">
      <img class="leaf_left" src="../assets/images/test03/leaf_left.png">
      <img class="diamond_right" src="../assets/images/test01/diamond_right.png">

      <img class="diamond_top_right" src="../assets/images/test03/diamond_top_right.png">
      <img class="diamond_left_center" src="../assets/images/test03/diamond_left_center.png">

      <img class="point" src="../assets/images/test03/point_left_bottom.png">

      <img class="diamond_bottom_center" src="../assets/images/test02/diamond_bottom_center.png">

      <img class="diamond_bottom" src="../assets/images/test03/diamond_bottom.png">

      <img class="bracelet" src="../assets/images/test03/bracelet.png">
    </div>

    <div class="test_box">
      <img class="lunch" v-if="isPlay" src="../assets/images/test03/lunch.gif">
      <img class="lunch" v-else src="../assets/images/test03/lunch.png">

      <img class="title" src="../assets/images/test03/title.png">

      <div class="options">
        <div class="option option01">
          <div class="click_area click_area_01" @click="select"></div>
          <img
            class="play_btn"
            :class="{ 'rotate': play[0] }"
            @click="goPlay($event,0)"
            src="../assets/images/test03/play_btn.png"
          >
        </div>
        <div class="option option02">
          <div class="click_area click_area_02" @click="select"></div>
          <img
            class="play_btn"
            :class="{ 'rotate': play[1] }"
            @click="goPlay($event,1)"
            src="../assets/images/test03/play_btn.png"
          >
        </div>
        <div class="option option03">
          <div class="click_area click_area_03" @click="select"></div>
          <img
            class="play_btn play_btn_03"
            :class="{ 'rotate': play[2] }"
            @click="goPlay($event,2)"
            src="../assets/images/test03/play_btn.png"
          >
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
      isPlay: false,
      play: [ false,false,false ]
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
        this.play = [false,false,false];
        this.isPlay = false;
      } else {
        this.play = [false,false,false];
        this.play[index] = true;
        this.isPlay = true;
      }
      console.log(this.play);
    },

    select() {
      this.$emit("sendInfo", "test04");
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
.leaf_top {
  position: absolute;
  top: 0;
  left: 0;
  width: 82px;
}
.leaf_left {
  position: absolute;
  top: 40px;
  left: 0;
  width: 68px;
}
.wheel_l {
  position: absolute;
  top: 0;
  right: 0;
  width: 105px;
}
.wheel_s {
  position: absolute;
  top: 80px;
  right: 0;
  width: 32px;
}
.diamond_right {
  position: absolute;
  top: 220px;
  right: 0;
  width: 56px;
}
.diamond_top_right {
  position: absolute;
  top: 66px;
  right: 40px;
  width: 42px;
}
.diamond_left_center {
  position: absolute;
  top: 260px;
  left: 38px;
  width: 60px;
}
.bracelet {
  position: absolute;
  bottom: 8px;
  right: 18px;
  width: 96px;
}
.diamond_bottom_center {
  position: absolute;
  bottom: 0;
  right: 120px;
  width: 84px;
}
.diamond_bottom {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
}
.point {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 86px;
}

.test_box {
  position: absolute;
  top: 76px;
  left: 40px;
  width: 85vw;
}

.lunch {
  position: absolute;
  top: 0;
  left: 0;
  width: 248px;
}
.title {
  width: 224px;
  display: block;
  margin: 102px 0 0 72px;
}
.options {
  position: relative;
  margin-top: 20px;
  width: 266px;
  height: 156px;
  background-image: url("../assets/images/test03/options.png");
  background-size: 100% 100%;
}

.option {
  position: absolute;
  width: 184px;
  height: 32px;
  transform-origin: center;
}

.option01 {
  background-color: rgba(255, 0, 0, 0.3);
  transform: skewY(-10deg);
  top: 12px;
  left: 12px;
}
.option02 {
  background-color: rgba(255, 0, 0, 0.3);
  transform: skewY(6deg);
  top: 60px;
  left: 82px;
}
.option03 {
  background-color: rgba(255, 0, 0, 0.3);
  transform: skewY(-10deg);
  top: 104px;
  left: 0px;
}
.click_area {
  width: 100%;
  height: 100%;
}
.play_btn {
  position: absolute;
  left: 106%;
  top: 0;
  width: 32px;
}

.play_btn_03 {
  top: 130%;
  left: 10%;
}

</style>
