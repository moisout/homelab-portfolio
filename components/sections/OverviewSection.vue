<template>
  <section id="uebersicht" class="section section-1">
    <div class="title-container">
      <div class="image" />
      <div id="uebersicht" class="overview">
        <div class="overview-box">
          <div class="content">
            <h2>overview</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OverviewSection',
});
</script>

<style lang="scss">
.section-1 {
  overflow: hidden;
  position: sticky;
  top: 0;

  .title-container {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
    flex-direction: column;
    position: relative;

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
