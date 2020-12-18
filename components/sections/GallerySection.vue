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
            <img
              class="image-original"
              src="@/assets/images/image-3-unedited.jpg"
            />
            <img
              class="image-edited"
              src="@/assets/images/image-3-edited.jpg"
              :style="{ opacity: imageOpacity }"
            />
          </div>
          <div
            class="image-container"
            :style="{
              transform: `translate3d(${(currentImg - 1) * -120}%,0,0)`,
            }"
          >
            <img
              class="image-original"
              src="@/assets/images/image-2-unedited.jpg"
            />
            <img
              class="image-edited"
              src="@/assets/images/image-2-edited.jpg"
              :style="{ opacity: imageOpacity }"
            />
          </div>
          <div
            class="image-container"
            :style="{
              transform: `translate3d(${(currentImg - 2) * -120}%,0,0)`,
            }"
          >
            <img
              class="image-original"
              src="@/assets/images/image-1-unedited.jpg"
            />
            <img
              class="image-edited"
              src="@/assets/images/image-1-edited.jpg"
              :style="{ opacity: imageOpacity }"
            />
          </div>
          <a class="swipe swipe-right" href="#" @click="cycleRight">&rsaquo;</a>
          <div class="image-slider-container">
            <input
              id="image-slider"
              v-model.number="imageOpacity"
              type="range"
              name="image-slider"
              min="0"
              max="1"
              step="0.01"
            />
            <label for="image-slider"
              >{{ Math.floor(imageOpacity * 100) }}% edited</label
            >
          </div>
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
      imageOpacity: 0,
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
    .image-slider-container {
      position: absolute;
      top: calc(100% - 80px);
      left: 50%;
      transform: translateX(-50%);
      z-index: 11;
      width: 100%;
      background: linear-gradient(to bottom, transparent, #fff 50%);
      display: flex;
      justify-content: center;
      height: 100px;
      padding: 40px 0 0 0;
      box-sizing: border-box;

      input[type='range'] {
        -webkit-appearance: none;
        background-color: transparent;
      }
      input[type='range']:focus {
        outline: none;
      }
      input[type='range']::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        background: $theme-color-1;
        border-radius: 25px;
        border: 0px solid #000101;
      }
      input[type='range']::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 25px;
        background: $theme-color-1;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7.5px;
      }
      input[type='range']:focus::-webkit-slider-runnable-track {
        background: $theme-color-1;
      }
      input[type='range']::-moz-range-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        background: $theme-color-1;
        border-radius: 25px;
        border: 0px solid #000101;
      }
      input[type='range']::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 25px;
        background: $theme-color-1;
        cursor: pointer;
      }
      input[type='range']::-ms-track {
        width: 100%;
        height: 12.8px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 39px 0;
        color: transparent;
      }
      input[type='range']::-ms-fill-lower {
        background: $theme-color-1;
        border: 0px solid #000101;
        border-radius: 50px;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
      }
      input[type='range']::-ms-fill-upper {
        background: $theme-color-1;
        border: 0px solid #000101;
        border-radius: 50px;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
      }
      input[type='range']::-ms-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 39px;
        border-radius: 7px;
        background: $theme-color-1;
        cursor: pointer;
      }
      input[type='range']:focus::-ms-fill-lower {
        background: $theme-color-1;
      }
      input[type='range']:focus::-ms-fill-upper {
        background: $theme-color-1;
      }

      body {
        padding: 30px;
      }

      input {
        width: 80%;
        height: 40px;
      }
      label {
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin: 0 0 0 10px;
      }
    }
    .image-container {
      width: calc(100% - 80px);
      height: calc(100% - 40px);
      position: absolute;
      box-sizing: border-box;
      margin: 0 20px;
      transition: transform 350ms;
      z-index: 3;

      .image-original,
      .image-edited {
        position: absolute;
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
