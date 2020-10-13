<template>
  <main class="container">
    <TitleSection />
    <OverviewSection />
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
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  .section {
    scroll-snap-align: start;
    flex-grow: 1;
    height: 100vh;
    width: 100%;
  }
}
</style>
