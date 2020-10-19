<template>
  <section class="section section-2">
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
  name: 'OverviewSection',
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
  background: linear-gradient(to bottom, transparent, #000000c9);
  z-index: 2;
  margin: 30% 0 0 0;

  .overview {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 50px;
    box-sizing: border-box;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }

    .overview-box {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      border-radius: 5px;
      color: #fff;
      position: relative;

      .content {
        border-radius: 5px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 20px;
        background-color: #1e1e1e;
        position: absolute;
      }

      &:before {
        content: '';
        border-radius: 5px;
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: linear-gradient(135deg, #f6ab3e 0%, #8037f6 100%);
      }
    }
  }
}
</style>
