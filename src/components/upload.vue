
<template>
  <div id="page">
    <div class="bg">
      <img class="leaf_bottom" src="../assets/images/loading/leaf_bottom.png">
    </div>
      
    <Upload
        multiple
        type="select"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        </div>
    </Upload>
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
.leaf_bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 106px;
}


</style>
