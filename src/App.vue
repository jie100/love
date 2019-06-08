<template>
  <div id="app">
    <!-- <router-view /> -->
    <page></page>
  </div>
</template>

<script>
import Page from  "./components/page";
import cookie from '@/cookie/index.js';
export default {
  name: "App",
  components: {
    page: Page
  }
};
</script>

<style>
#app {
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
