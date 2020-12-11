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
                <a :href="app.link" target="_blank" rel="noopener noreferrer"
                  ><h3>{{ app.title }}</h3></a
                >
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
            'ViewTube is an alternative YouTube frontend using the invidio.us API. It can recommend, play and search for videos.',
          link: 'https://github.com/ViewTube/viewtube-vue',
        },
        {
          title: 'Drone.io',
          thumbnail: require('@/assets/icons/drone.png'),
          description: 'a',
          link: 'https://www.drone.io/',
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
          @media screen and (min-width: 1200px) {
            grid-template-columns: repeat(auto-fill, 33%);
          }

          @media screen and (max-width: $mobile-width) {
            grid-template-columns: 100%;
          }

          .app {
            display: flex;
            flex-direction: row;
            margin: 10px 15px 0 0;

            .title-container {
              display: flex;
              flex-direction: column;
              margin: 0 10px 0 0;

              img {
                width: 96px;
                height: 96px;
              }
              a {
                text-decoration: none;
                color: $theme-color-1;
                position: relative;

                &::after {
                  content: '';
                  display: block;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                  height: 3px;
                  background-color: #dd2c77;
                  border-radius: 2px;
                  transform: scale(0, 1);
                  transform-origin: left;
                  transition: transform 300ms ease-in-out;
                }

                &:hover {
                  &::after {
                    transform: scale(1);
                  }
                }
                h3 {
                  margin: 10px 0 0 0;
                }
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
