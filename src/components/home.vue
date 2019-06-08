
<template>
  <div id="page">
    <ul class="banner">
      <li>
        <img src="../assets/images/home/banner.jpg">
        <img class="banner_gif" src="../assets/images/home/banner.gif">
      </li>
    </ul>

    <img class="necklace skew_both" src="../assets/images/home/necklace.png">

    <img class="diamond_left" src="../assets/images/loading/diamond_left.png">
    <img class="diamond_right" src="../assets/images/loading/diamond_right.png">
    <img class="diamond_bottom" src="../assets/images/loading/diamond_bottom.png">
    <img class="circle" src="../assets/images/circle.png">
    <img class="ball " src="../assets/images/home/ball.png">
    <img class="shadow " src="../assets/images/home/shadow.png">
    <img class="title " src="../assets/images/home/title.png">
    <img
      class="leaf_bottom"
      :class="{skew_bottom:entry}"
      src="../assets/images/loading/leaf_bottom.png"
    >
    <div class="btn_box">
      <div class="btn" @click="goTest"></div>
      <img class="decoration" src="../assets/images/home/decoration.png">
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
    goTest() {
      console.log( 'start test' );
      this.$emit('sendInfo', "test01");
    }
  },
  beforeDestroy() {
    this.entry = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  position: absolute;
  top: 38px;
  left: 50%;
  transform: translateX( -50% );
  width: 85vw;
  z-index: 1;
}
.banner img {
  width: 100%;
}

.banner .banner_gif{
  position: absolute;
  top: 0;
  left: 0;
}

.leaf_bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 106px;
}
.diamond_left {
  position: absolute;
  left: 0;
  top: 134px;
  width: 65px;
  z-index: 2;
}
.diamond_right {
  position: absolute;
  right: 0;
  top: 0;
  width: 44px;
  z-index: 2;
}
.diamond_bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
}

.necklace{
  position: absolute;
  left: 0;
  bottom: 70px;
  width: 112px;
  z-index: 2;
}

.ball{
  position: absolute;
  right: 15px;
  bottom: 78px;
  width: 70px;
}

.shadow{
  position: absolute;
  left: 0;
  top: 320px;
  width: 100px;
}

.title{
  position: absolute;
  right: 32px;
  bottom: 75px;
  width: 68px;
  z-index: 2;
}

.showbar {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 30px;
}

.btn_box{
  position: absolute;
  background-image: url("../assets/images/home/btn_bg.png");
  background-size: 100% 100%;
  right: 96px;
  bottom: 46px;
  width: 143px;
  height: 277px;
}

.btn{
  width: 100%;
  height: 80px;
  position: absolute;
  left: 0;
  bottom: 0;
}

.decoration{
  position: absolute;
  right: -15px;
  bottom: 96px;
  pointer-events: none;
  width: 135px;
  height: 102px;
  z-index: 3;
}

.circle {
  bottom: 4px;
  left: 104px;
}

.progress {
  position: relative;
  margin: 176px auto 0;
  width: 75vw;
}

.progress_bar {
  top: -6px;
}

.loading_content {
  margin-top: 26px;
}

.music_bar {
  margin: 10px 0;
  width: 100%;
}

.btn {
  width: 148px;
  display: block;
  margin: 42px auto 0;
}
</style>
