<template>
  <main id="main-container" class="container">
    <div class="overlay">
      <div class="pattern" />
    </div>
    <Navigation />
    <div class="img-clip">
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
@mixin backgroundpattern {
  background-color: #ffffff;
  opacity: 0.08;
  background-image: linear-gradient(135deg, #d500ff 25%, transparent 25%),
    linear-gradient(225deg, #d500ff 25%, transparent 25%),
    linear-gradient(45deg, #d500ff 25%, transparent 25%),
    linear-gradient(315deg, #d500ff 25%, #ffffff 25%);
  background-position: 13px 0, 13px 0, 0 0, 0 0;
  background-size: 26px 26px;
  background-repeat: repeat;
}

.overlay {
  .pattern {
    @include backgroundpattern();
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  background-color: #fff;
  animation: fade-out 1s ease-in-out forwards;
  pointer-events: none;
}

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
      @include backgroundpattern();
    }
  }

  .section {
    height: 100%;
    width: 100%;

    &:nth-of-type(1) {
      .overview-box::before {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      }
    }

    .overview {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 50px;
      box-sizing: border-box;
      transition: padding 300ms;

      @media screen and (max-width: $mobile-width) {
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

        &::before {
          content: '';
          border-radius: 25px;
          position: absolute;
          top: 75px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: #dd2c77;
        }
      }
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
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
