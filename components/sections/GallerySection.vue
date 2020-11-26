<template>
  <section id="galerie" class="section section-2">
    <div class="overview">
      <div class="overview-box">
        <div class="content">
          <nuxt-content :document="page" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GallerySection',
  async fetch() {
    const page = await this.$content('overview').fetch();

    this.page = page;
  },
  data() {
    return {
      page: null,
    };
  },
});
</script>

<style lang="scss">
.section-2 {
  position: sticky;
  top: 0;
  // background: linear-gradient(to bottom, transparent, #000000c9);
  z-index: 2;
}
</style>
