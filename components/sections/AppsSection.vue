<template>
  <section id="apps" class="section section-4">
    <div class="overview">
      <div class="overview-box">
        <div class="content">
          <h2>Apps</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppsSection',
  data() {
    return {};
  },
});
</script>

<style lang="scss">
.section-4 {
  position: sticky;
  top: 0;
  // background: linear-gradient(to bottom, transparent, #000000c9 60%);
  // backdrop-filter: blur(50px);
  z-index: 3;
}
</style>
