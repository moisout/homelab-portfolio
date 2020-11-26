<template>
  <main id="main-container" class="container">
    <Navigation />
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
          <!-- <img src="~@/assets/images/home-720x.webp" alt="" /> -->
        </picture>
      </div>
      <div class="img-container"></div>
    </div>
    <OverviewSection />
    <GallerySection />
    <VideoSection />
    <AppsSection />
    <AboutSection />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
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
  scroll-behavior: smooth;

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
      background-color: #ffffff;
      opacity: 0.08;
      background-image: linear-gradient(135deg, #d500ff 25%, transparent 25%),
        linear-gradient(225deg, #d500ff 25%, transparent 25%),
        linear-gradient(45deg, #d500ff 25%, transparent 25%),
        linear-gradient(315deg, #d500ff 25%, #ffffff 25%);
      background-position: 13px 0, 13px 0, 0 0, 0 0;
      background-size: 26px 26px;
      background-repeat: repeat;
      // clip-path: polygon(
      //   0 0,
      //   100% 0,
      //   100% 100%,
      //   0 100%,
      //   0 0,
      //   10% 10%,
      //   10% 90%,
      //   90% 90%,
      //   90% 10%,
      //   10% 10%
      // );
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
      z-index: +1;

      picture,
      img {
        position: absolute;
        min-height: 100%;
        min-width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
      }
    }
  }

  .section {
    height: 100%;
    width: 100%;
  }
}

.overview {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 50px;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    padding: 70px 10px 10px 10px;
  }

  .overview-box {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    color: #111;
    position: relative;

    .content {
      border-radius: 20px;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 20px;
      background-color: #fff;
      position: absolute;
    }

    &:before {
      content: '';
      border-radius: 25px;
      position: absolute;
      top: 75px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: #dd2c77;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
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
