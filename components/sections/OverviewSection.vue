<template>
  <section id="uebersicht" class="section section-1 first">
    <div id="uebersicht" class="overview">
      <div class="overview-box">
        <div class="content">
          <div v-if="page" class="left-content">
            <h2>{{ page.title }}</h2>
            <h3>{{ page.description }}</h3>
            <nuxt-content :document="page" />
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

    @media screen and (max-width: $mobile-width) {
      grid-template-columns: 100%;
      grid-template-rows: 50% 50%;

      .right-content {
        .showcase-image {
          max-width: 100% !important;
        }
      }
    }

    .right-content {
      display: flex;
      overflow: hidden;

      .showcase-image {
        max-width: 120%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: auto;
      }
    }
  }
}
</style>
