<template>
  <section class="section section-1">
    <div class="title-container">
      <h1 class="main-title">
        <p class="first">
          <span v-for="(letter, i) in titleArray(title1)" :key="i">{{
            letter
          }}</span>
        </p>
        <p class="second">
          <span v-for="(letter, i) in titleArray(title2)" :key="i">{{
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
      title1: 'Home',
      title2: 'lab',
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
  background-attachment: fixed;
  background-image: url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.shutterstock.com%2Fz%2Fstock-photo-computer-repair-160046102.jpg&f=1&nofb=1);

  .title-container {
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #ffffff86 50%, #ffffff 90%);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
    flex-direction: column;

    .scroll-down {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0) rotate(180deg);
      font-size: 50px;
      font-weight: 100;
      color: #999;
    }

    .main-title {
      font-family: 'libre-baskerville', serif;
      display: block;
      font-size: 15vw;
      color: #20435ac2;
      letter-spacing: 1px;
      position: relative;

      p {
        span {
          opacity: 0;
          animation: appear linear 100ms forwards;
        }
      }

      p.first {
        @for $i from 1 through 4 {
          span:nth-of-type(#{$i}) {
            animation-delay: ($i * 120) + ms;
          }
        }
      }

      p.second {
        @for $i from 1 through 3 {
          span:nth-of-type(#{$i}) {
            animation-delay: (($i + 4) * 120) + ms;
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
