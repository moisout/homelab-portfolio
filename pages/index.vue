<template>
  <main class="container" @scroll.passive="handleScroll">
    <div class="img-clip">
      <div class="img-main" />
      <div
        class="img-front"
        :style="{
          transform: `scale(${scrollTop})`,
          opacity: 1 - (scrollTop - 1),
        }"
      ></div>
      <div
        class="img-container"
        :style="{
          transform: `scale(${scrollTop})`,
        }"
      ></div>
    </div>
    <TitleSection />
    <OverviewSection />
    <VideoSection />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      scrollTop: 1,
    };
  },
  methods: {
    handleScroll(e: any) {
      this.scrollTop = e.target.scrollTop / 300 + 1;
    },
  },
});
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  height: 100vh;
  overflow-y: scroll;

  .img-clip {
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .img-container {
      position: absolute;
      width: 100%;
      height: 100%;
      transform-origin: center;
      pointer-events: none;
      background: linear-gradient(
        to bottom,
        var(--color-main),
        var(--color-alt),
        var(--color-light)
      );
      clip-path: polygon(
        0 0,
        100% 0,
        100% 100%,
        0 100%,
        0 0,
        30% 30%,
        30% 70%,
        70% 70%,
        70% 30%,
        30% 30%
      );
    }

    .img-front {
      position: absolute;
      width: 100%;
      height: 100%;
      transform-origin: center;
      pointer-events: none;
      background-color: #1e1e1e;
      clip-path: polygon(30% 29%, 30% 71%, 70% 71%, 70% 29%, 30% 29%);
    }

    .img-main {
      position: absolute;
      display: block;
      object-fit: cover;
      transform-origin: center;
      background: url('~@/assets/images/home-1080x.webp');
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
  }

  .section {
    height: 100%;
    width: 100%;
  }
}
</style>
