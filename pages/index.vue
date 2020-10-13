<template>
  <main class="container">
    <TitleSection />
    <OverviewSection />
    <VideoSection />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  height: 100vh;
  // scroll-snap-type: y mandatory;
  overflow-y: scroll;
  background-image: url('~@/assets/images/IMG_20201013_181543.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  .section {
    // scroll-snap-align: start;
    height: 100%;
    width: 100%;
  }
}
</style>
