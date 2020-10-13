<template>
  <section class="section section-3">
    <div class="overview">
      <div class="overview-box">
        <h2>Video</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VideoSection',
  data() {},
})
</script>

<style lang="scss">
.section-3 {
  position: sticky;
  top: 0;
  // background: linear-gradient(to bottom, transparent, #000000c9);
  // backdrop-filter: blur(50px);
  z-index: 3;

  .overview {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 50px;
    box-sizing: border-box;

    .overview-box {
      box-sizing: border-box;
      background: linear-gradient(135deg, #a0d468 0%, #6dae26 100%);
      width: 100%;
      height: 100%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      border-radius: 5px;
      padding: 20px;
      color: #fff;
    }
  }
}
</style>
