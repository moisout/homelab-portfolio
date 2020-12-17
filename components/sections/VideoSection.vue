<template>
  <section id="video" class="section section-3">
    <div class="overview">
      <div class="overview-box">
        <div class="content" :class="{ 'overlay-hidden': videoHidden }">
          <iframe
            v-if="videoHidden"
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/a2WAwuZLeWE"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="video-overlay" @click.prevent="playVideo"></div>
          <span class="play-btn"
            ><img src="@/assets/logos/play-icon.svg" alt=">"
          /></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'VideoSection',
  data() {
    return {
      videoHidden: false,
    };
  },
  methods: {
    playVideo() {
      this.videoHidden = true;
    },
  },
});
</script>

<style lang="scss">
.section-3 {
  position: sticky;
  top: 0;
  // background: linear-gradient(to bottom, transparent, #000000c9 60%);
  // backdrop-filter: blur(50px);
  z-index: 3;

  .overview {
    .overview-box {
      &::before {
        background: linear-gradient(35deg, #ff3e3e, #8c00ff) !important;
      }
      .content {
        padding: 0 !important;
        border-radius: 25px;
        overflow: hidden;

        .videoplayer {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }

        &.overlay-hidden {
          .play-btn,
          .video-overlay {
            pointer-events: none;
            opacity: 0;
          }
          .video-overlay {
            animation: spin-fade 500ms ease-out forwards;
          }
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-radius: 18px;
          background: linear-gradient(35deg, #ff3e3e, #8c00ff);
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 200ms;
          pointer-events: none;

          img {
            width: 84px;
            height: 84px;
          }
        }
      }
    }
  }
}
@keyframes spin-fade {
  0% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(10deg) scale(1.5);
    opacity: 0;
  }
}
</style>
