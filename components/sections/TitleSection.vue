<template>
  <section class="section section-1">
    <div class="title-container">
      <div class="image" />
      <h1 class="main-title">
        <p class="letters">
          <span v-for="(letter, i) in titleArray(title1)" :key="i">{{
            letter
          }}</span>
        </p>
      </h1>
      <span class="scroll-down">^</span>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TitleSection',
  data() {
    return {
      title1: 'HOMELAB',
    }
  },
  methods: {
    titleArray(title: string): Array<string> {
      return title.split('')
    },
  },
})
</script>

<style lang="scss">
.section-1 {
  overflow: hidden;

  .title-container {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
    flex-direction: column;
    position: relative;

    .scroll-down {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translate(-50%, 0) rotate(180deg);
      font-size: 50px;
      font-weight: 100;
      color: #ed5565;
      text-shadow: 0 0 1px #000;
    }

    .image {
      position: absolute;
      width: 100%;
      height: 100%;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      overflow: hidden;
      // clip-path: polygon(0 30%, 20% 0, 100% 0, 100% 70%, 80% 100%, 0 100%);
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    .main-title {
      height: 500px;
      padding: 0 150px;
      position: absolute;
      font-family: 'noto-sans', sans-serif;
      display: block;
      font-size: 60pt;
      color: #fff;
      letter-spacing: 1px;
      text-align: center;
      align-items: flex-end;
      display: flex;
      transform: rotate(-45deg) translate(-75px, -360px);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      background-color: #1e1e1e;

      p {
        span {
          opacity: 0;
          animation: appear linear 100ms forwards;
        }
      }

      p.letters {
        @for $i from 1 through 7 {
          span:nth-of-type(#{$i}) {
            animation-delay: ($i * 100) + ms;
          }
        }
      }
    }
  }

  @keyframes appear {
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
