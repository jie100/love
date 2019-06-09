
<template>
  <div id="page">
    <ul class="process_box">
      <li class="process_circle" :class="{current: progress==='test01'}" ></li>
      <li class="process_circle" :class="{current: progress==='test02'}" ></li>
      <li class="process_circle" :class="{current: progress==='test03'}" ></li>
      <li class="process_circle" :class="{current: progress==='test04'}" ></li>
      <li class="process_circle" :class="{current: progress==='test05'}" ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    progress: String
  },
  data() {
    return {
      
    };
  },
  mounted() {
    this.entry = true;
    
    console.log( this.progress )
  },
  methods: {
    goTest() {
      console.log( 'start test' );
      this.$emit('sendInfo', "test01");
    }
  },
  computed:{
    getProgress(){
      return ""
    }
  },
  beforeDestroy() {
    this.entry = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page{
  pointer-events: none;
  z-index: 1000;
}
.process_box{
  pointer-events: auto;
  position: absolute;
  left: 0;
  top: 200px;
  padding: 10px;
}
.process_circle{
  margin-top: 14px;
  width: 8px;
  height: 8px;
  border: 1px solid black;
  border-radius: 50%;
}
.process_circle.current{
  background-color: black;
}
</style>
