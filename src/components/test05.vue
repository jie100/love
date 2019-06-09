
<template>
  <div id="page">
    <div class="bg">
      <img class="diamond_right" src="../assets/images/test01/diamond_right.png">
      <img class="leaf_bottom" src="../assets/images/loading/leaf_bottom.png">
      <img class="diamond_bottom_center" src="../assets/images/test02/diamond_bottom_center.png">
      <img class="diamond_left_bottom" src="../assets/images/test05/diamond_left_bottom.png">
    </div>

    <div class="test_box">
      <img class="violin" src="../assets/images/test05/violin.png">
      <img class="title" src="../assets/images/test05/title.png">
      <img class="options" @click="select" src="../assets/images/test05/options.png">
      <!-- <div class="options_box">
        <img class="options" src="../assets/images/test05/options.png">
        <ul class="opt_btns">
          <li class="option option01"></li>
          <li class="option option02"></li>
          <li class="option option03"></li>
          <li class="option option04"></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entry: false,
    };
  },
  mounted() {
    this.entry = true;
  },
  methods: {
    select() {
      //this.$store.commit("setAnswerId", { index: 2, answerId: answerId });

      const first = this.$store.state.answerId_01;
      const second = this.$store.state.answerId_04;
      console.log(first);
      console.log(second);

      // if( (first === 1 && second === 1) || (first === 2 && second === 3) ){
      //   console.log('摇滚：result01');
      //   this.$emit("sendInfo", "result01");
      // }else if( (first === 1 && second === 2) || (first === 2 && second === 4) ){
      //   console.log('爵士：result02');
      //   this.$emit("sendInfo", "result02");
      // }else if( (first === 1 && second === 3) || (first === 2 && second === 2) ){
      //   console.log('金属：result03');
      //   this.$emit("sendInfo", "result03");
      // }else if( (first === 1 && second === 4) || (first === 2 && second === 1) ){
      //   console.log('民谣：result04');
      //   this.$emit("sendInfo", "result04");
      // }else{
      //   console.log('蓝调：result05');
      //   this.$emit("sendInfo", "result05");
      // }

      this.$emit("sendInfo", "result01");
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
.leaf_bottom {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 106px;
}
.diamond_right {
  position: absolute;
  right: 0;
  top: 24px;
  width: 56px;
}
.diamond_left_bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 47px;
}
.diamond_bottom_center {
  position: absolute;
  bottom: 0;
  right: 120px;
  width: 84px;
}

.test_box {
  position: relative;
  margin-left: 15vw;
  width: 75vw;
}
.violin{
  position: absolute;
  top: 0;
  left: 0;
  width: 47.8%;
}
.title{
  width: 100%;
}

.options{
  width: 100%;
  margin-top: 15px;
}
/* 
.options_box{
  position: relative;
  margin-top: 15px;
  width: 100%;
}
.opt_btns{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.option{
  position: absolute;
  width: 100%;
  height: 22%;
  background-color: rgba(255,0,0,.3);
  
}
.option01{
  height: 15%;
  transform: skewY( -6deg );
  transform-origin: top right;
}
.option02{
  top: 20%;
  left: 10px;
  transform: skewY( 3deg );
  transform-origin: top left;
  width: 92%;
}
.option03{
  top: 40%;
  left: 10px;
  transform: skewY( -6deg );
  transform-origin: top right;
  width: 75%;
}
.option04{
  position: absolute;
  bottom: 0;
  left: 10%;
  transform: skewY( 3deg );
  transform-origin: bottom right;
  width: 92%;
} */




</style>
