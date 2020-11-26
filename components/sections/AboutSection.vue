<template>
  <section id="ueber" class="section section-5">
    <div class="overview">
      <div class="overview-box">
        <div class="content">
          <h2>Über</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutSection',
  data() {
    return {};
  },
});
</script>

<style lang="scss">
.section-5 {
  position: sticky;
  top: 0;
  // background: linear-gradient(to bottom, transparent, #000000c9 60%);
  // backdrop-filter: blur(50px);
  z-index: 3;
}
</style>
