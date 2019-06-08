
<template>
  <div id="page">
      <img class="showbar" src="../assets/images/loading/showbar.png">
      <img
        class="diamond_left"
        :class="{fade:entry}"
        src="../assets/images/loading/diamond_left.png"
      >
      <img
        class="diamond_right"
        :class="{fade_1:entry}"
        src="../assets/images/loading/diamond_right.png"
      >
      <img
        class="diamond_bottom"
        :class="{fade_2:entry}"
        src="../assets/images/loading/diamond_bottom.png"
      >
      <img class="circle" src="../assets/images/circle.png">
      <img class="leaf_top" :class="{skew_top:entry}" src="../assets/images/loading/leaf_top.png">
      <img
        class="leaf_bottom"
        :class="{skew_bottom:entry}"
        src="../assets/images/loading/leaf_bottom.png"
      >

      <div class="progress">
        <span class="fz-12">loading</span>
        <Progress
          class="progress_bar"
          :percent="progress"
          :stroke-width="2"
          stroke-color="#5b6886"
          hide-info
        ></Progress>
        <ul class="loading_content fz-12">
          <li>柏拉图在《乡宴》中说</li>
          <li v-if="progress>=10">「所谓爱情，就是我们的心，为美丽之人所吸引」</li>
          <li class="m-t-15" v-if="progress>=20">爱情的诞生</li>
          <li v-if="progress>=30">会带给你去向</li>
          <li v-if="progress>=40">更真/更美/更善的境界与真理</li>
          <li class="m-t-15" v-if="progress>=50">音乐里的爱情，拨动人之心弦</li>
          <li v-if="progress>=60">让你想起某个瞬间、某些往事</li>
          <li class="m-t-15" v-if="progress>=70">这个夏天，在音乐里，与TA共享浪漫</li>
          <li v-if="progress>=80">
            <img class="music_bar" src="../assets/images/loading/music_bar.png">
          </li>
          <li v-if="progress>=90">请打开声音</li>
          <li v-if="progress>=100">
            <img class="btn" src="../assets/images/loading/loading_btn.png">
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      entry: false
    };
  },
  mounted() {
    this.entry = true;
    this.progress = 0;
    let timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) {
        clearInterval(timer);
        this.$emit('sendInfo', this.progress);
      }
    }, 10);
  },
  beforeDestroy() {
    this.entry = false;
    this.progress = 0;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leaf_top {
  position: absolute;
  top: 0;
  left: 75px;
  width: 120px;
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
  top: 210px;
  width: 40px;
}
.diamond_right {
  position: absolute;
  right: 0;
  top: 80px;
  width: 34px;
}
.diamond_bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
}

.showbar {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 30px;
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
