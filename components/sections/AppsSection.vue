<template>
  <section id="apps" class="section section-4">
    <div class="overview">
      <div class="overview-box">
        <div class="content">
          <h2>Apps</h2>
          <div class="app-gallery">
            <div v-for="app in apps" :key="app.index" class="app">
              <div class="img-container">
                <img :src="app.thumbnail" :alt="app.title" />
              </div>
              <div class="description-container">
                <a :href="app.link" target="_blank" rel="noopener noreferrer"
                  ><h3>
                    {{ app.title }}
                    <div v-if="app.selfmade" class="selfmade-badge">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-user-check"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 11l2 2l4 -4" />
                      </svg>
                      <p>Made by me</p>
                    </div>
                  </h3></a
                >
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
          selfmade: true,
        },
        {
          title: 'Drone.io',
          thumbnail: require('@/assets/icons/drone.png'),
          description: 'Automate Software Build and Testing.',
          link: 'https://www.drone.io/',
        },
        {
          title: 'Nextcloud',
          thumbnail: require('@/assets/icons/nextcloud.svg'),
          description:
            'The self-hosted productivity platform that keeps you in control.',
          link: 'https://nextcloud.com/',
        },
        {
          title: 'Jellyfin',
          thumbnail: require('@/assets/icons/jellyfin.svg'),
          description: 'The Free Software Media System.',
          link: 'https://jellyfin.org/',
        },
        {
          title: 'Bitwarden',
          thumbnail: require('@/assets/icons/bitwarden.svg'),
          description: 'Open Source Password Management for You.',
          link: 'https://bitwarden.com/',
        },
        {
          title: 'Mandelbrot',
          thumbnail: require('@/assets/icons/mandelbrot.png'),
          description: 'Calculate the mandelbrot set inside your browser.',
          link: 'https://github.com/mauriceoegerli/mandelbrot/',
          selfmade: true,
        },
        {
          title: 'Octoprint',
          thumbnail: require('@/assets/icons/octoprint-logo.png'),
          description: 'The snappy web interface for your 3D printer.',
          link: 'https://octoprint.org/',
        },
        {
          title: 'Swarmpit',
          thumbnail: require('@/assets/icons/swarmpit-logo.png'),
          description: 'Operate your docker infrastructure like a champ.',
          link: 'https://swarmpit.io/',
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
            margin: 10px 30px 20px 0;

            .img-container {
              display: flex;
              flex-direction: column;
              margin: 0 10px 0 0;

              img {
                width: 96px;
                height: 96px;
                padding: 10px;
              }
            }
            .description-container {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

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
                  margin: 0;
                  width: auto;

                  .selfmade-badge {
                    position: relative;
                    margin: 0;
                    display: inline-block;
                    height: 24px;
                    bottom: -2px;
                    border-radius: 25px;
                    box-sizing: border-box;

                    background-color: $theme-color-1;
                    padding: 2px 8px 2px 8px;

                    p {
                      position: relative;
                      display: inline-block;
                      font-size: 1rem;
                      color: #fff;
                      margin: 0;
                      bottom: 4px;
                    }

                    svg {
                      display: inline-block;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
