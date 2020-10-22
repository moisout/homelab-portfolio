<template>
  <main class="container">
    <div class="img-clip">
      <div class="img-main">
        <picture>
          <source
            media="(min-width: 56.25em)"
            src="~@/assets/images/home-1440x.webp"
          />
          <source
            media="(min-width: 37.5em)"
            src="~@/assets/images/home-1080x.webp"
          />
          <source src="~@/assets/images/home-720x.webp" />
          <img src="~@/assets/images/home-720x.webp" alt="" />
        </picture>
      </div>
      <div class="img-container"></div>
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
      scrollTopDegrees: 0,
    };
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
      // background-color: #fff;
      background: linear-gradient(
        to bottom,
        var(--color-main),
        var(--color-alt),
        var(--color-light)
      );
      transition: transform 300ms linear;
      clip-path: polygon(
        0 0,
        100% 0,
        100% 100%,
        0 100%,
        0 0,
        10% 10%,
        10% 90%,
        90% 90%,
        90% 10%,
        10% 10%
      );
      // transform: scale(2);
    }

    .img-main {
      position: absolute;
      display: block;
      object-fit: cover;
      transform-origin: center;
      // background: url('~@/assets/images/home-1080x.webp');
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;

      picture {
        position: absolute;
        min-height: 100%;
        min-width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .section {
    height: 100%;
    width: 100%;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
