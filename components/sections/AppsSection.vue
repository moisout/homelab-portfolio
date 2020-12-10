<template>
  <section id="apps" class="section section-4">
    <div class="overview">
      <div class="overview-box">
        <div class="content">
          <h2>Apps</h2>
          <div class="app-gallery">
            <div v-for="app in apps" :key="app.index" class="app">
              <div class="title-container">
                <img :src="app.thumbnail" :alt="app.title" />
                <h3>{{ app.title }}</h3>
              </div>
              <div class="description-container">
                <p>{{ app.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppsSection',
  data() {
    return {
      apps: [
        {
          title: 'ViewTube',
          thumbnail: require('@/assets/icons/viewtube.svg'),
          description:
            'ViewTube is an alternative YouTube frontend using the invidio.us API. It can recommend, play and search for videos. It saves your watch progress and you can subscribe to channels for them to appear in your subscription feed.',
        },
        {
          title: 'Drone.io',
          thumbnail: require('@/assets/icons/drone.png'),
          description: 'a',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.section-4 {
  position: sticky;
  top: 0;
  // background: linear-gradient(to bottom, transparent, #000000c9 60%);
  // backdrop-filter: blur(50px);
  z-index: 3;

  .overview {
    .overview-box {
      .content {
        .app-gallery {
          height: calc(100% - 40px);
          overflow: hidden auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, 50%);

          @media screen and (max-width: $mobile-width) {
            grid-template-columns: 100%;
          }

          .app {
            display: flex;
            flex-direction: row;
            margin: 10px 10px 0 0;

            .title-container {
              display: flex;
              flex-direction: column;
              margin: 0 10px 0 0;

              img {
                width: 100px;
                height: 100px;
              }
              h3 {
              }
            }
            .description-container {
            }
          }
        }
      }
    }
  }
}
</style>
