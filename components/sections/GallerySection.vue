<template>
  <section id="galerie" class="section section-2">
    <div class="overview">
      <div class="gallery overview-box">
        <div class="images-container content">
          <span class="image-indicator"
            >{{ currentImg + 1 }}/{{ imageCount }}</span
          >
          <a class="swipe swipe-left" href="#" @click="cycleLeft">&lsaquo;</a>
          <div
            class="image-container"
            :style="{ transform: `translate3d(${currentImg * -120}%,0,0)` }"
          >
            <img class="image" src="@/assets/images/home-1080x.webp" />
          </div>
          <div
            class="image-container"
            :style="{
              transform: `translate3d(${(currentImg - 1) * -120}%,0,0)`,
            }"
          >
            <img class="image" src="@/assets/images/home-1080x.webp" />
          </div>
          <div
            class="image-container"
            :style="{
              transform: `translate3d(${(currentImg - 2) * -120}%,0,0)`,
            }"
          >
            <img class="image" src="@/assets/images/home-1080x.webp" />
          </div>
          <a class="swipe swipe-right" href="#" @click="cycleRight">&rsaquo;</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GallerySection',
  data() {
    return {
      currentImg: 0,
      imageCount: 3,
    };
  },
  methods: {
    cycleLeft(e: any) {
      if (this.currentImg > 0) {
        this.currentImg = this.currentImg - 1;
      }
      e.preventDefault();
    },
    cycleRight(e: any) {
      if (this.currentImg + 1 < this.imageCount) {
        this.currentImg = this.currentImg + 1;
      }
      e.preventDefault();
    },
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

.gallery {
  width: 100%;
  height: 100%;

  .images-container {
    position: relative;
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    box-sizing: border-box;

    .image-indicator {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 2rem;
      color: #1e1e1ebd;
    }

    .swipe {
      position: absolute;
      text-decoration: none;
      top: 50%;
      transform: translateY(-50%);
      color: #1e1e1ebd;
      font-size: 100px;
      font-weight: 100;
      margin: 0;
      font-family: sans-serif;
      text-shadow: 0 0 5px transparent;
      z-index: 4;
      transition: text-shadow 100ms;

      &:hover {
        text-shadow: 0 0 5px #000;
      }
    }

    .swipe-left {
      left: 0;
    }
    .swipe-right {
      right: 0;
    }
    .image-container {
      width: calc(100% - 80px);
      height: calc(100% - 40px);
      position: absolute;
      box-sizing: border-box;
      margin: 0 20px;
      transition: transform 350ms;
      z-index: 3;

      .image {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>
