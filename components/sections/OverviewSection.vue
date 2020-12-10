<template>
  <section id="uebersicht" class="section section-1 first">
    <div id="uebersicht" class="overview">
      <div class="overview-box">
        <div class="content">
          <div class="left-content">
            <h2>overview</h2>
          </div>
          <div class="right-content">
            <img
              class="showcase-image"
              src="@/assets/images/home-720x.webp"
              alt="Home image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OverviewSection',
  data() {
    return {
      page: null,
    };
  },
  async fetch() {
    const page = await this.$content('overview').fetch();

    this.page = page;
  },
});
</script>

<style lang="scss">
.section-1 {
  overflow: hidden;
  position: sticky;
  top: 0;

  .content {
    display: grid;
    grid-template-columns: 50% 50%;

    .right-content {
      display: flex;

      .showcase-image {
        max-width: 100%;
        margin: auto;
      }
    }
  }
}
</style>
