<template>
  <header>
    <h1 class="main-title">
      <img
        class="homelab-logo"
        src="@/assets/logos/homelab-logo-light.svg"
        alt="Homelab Logo"
      />
      <p class="letters">
        <span v-for="(letter, i) in titleArray(title1)" :key="i">{{
          letter
        }}</span>
      </p>
    </h1>
    <nav>
      <a
        v-for="(item, index) in navItems"
        :key="index"
        class="nav-btn"
        :class="{ selected: selectedNavItem.hash === item.hash }"
        :href="`#${item.hash}`"
        @click="(e) => scrollTo(item.hash, item.pos, e)"
        >{{ item.title }}</a
      >
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',
  data() {
    return {
      title1: 'HOMELAB',
      navItems: [
        { title: 'Übersicht', hash: 'uebersicht', pos: 0, selected: false },
        {
          title: 'Galerie',
          hash: 'galerie',
          pos: window.innerHeight,
          selected: false,
        },
        {
          title: 'Video',
          hash: 'video',
          pos: window.innerHeight * 2,
          selected: false,
        },
        {
          title: 'Apps',
          hash: 'apps',
          pos: window.innerHeight * 3,
          selected: false,
        },
        {
          title: 'Über',
          hash: 'ueber',
          pos: window.innerHeight * 4,
          selected: false,
        },
      ],
    };
  },
  computed: {
    selectedNavItem() {
      let selected = null;
      this.navItems.forEach((el) => {
        if (el.selected) {
          selected = el;
        }
      });
      if (!selected) {
        return (this as any).navItems[0];
      }
      return selected;
    },
  },
  watch: {
    selectedNavItem(newVal) {
      window.location.hash = newVal.hash;
    },
  },
  mounted() {
    setTimeout(() => {
      const currentScrollItem = this.navItems.find(
        (el) => el.hash === window.location.hash
      );
      if (currentScrollItem) {
        this.scrollTo(currentScrollItem.hash, currentScrollItem.pos);
      }
    }, 300);

    const options = {
      root: document.getElementById('main-container'),
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries: any, _) => {
      let selectedEl: any = null;
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          selectedEl = this.navItems.find((el) => el.hash === entry.target.id);
        }
        this.navItems.find(
          (el) => el.hash === entry.target.id
        ).selected = false;
      });
      if (selectedEl) {
        selectedEl.selected = true;
      }
    }, options);

    this.navItems.forEach((element) => {
      const target = document.getElementById(element.hash);
      if (target) {
        observer.observe(target);
      }
    });
  },
  methods: {
    titleArray(title: string): Array<string> {
      return title.split('');
    },
    scrollTo(hash: string, pos: number, e: any = null) {
      document
        .getElementsByClassName('container')[0]
        .scrollTo({ top: pos, behavior: 'smooth' });
      window.location.hash = hash;
      if (e) {
        e.preventDefault();
      }
    },
  },
});
</script>

<style lang="scss">
header {
  position: fixed;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 9;
  background-color: #fff;

  .main-title {
    height: 200px;
    padding: 0 70px;
    position: absolute;
    left: 0;
    font-family: 'noto-sans', sans-serif;
    display: block;
    font-size: 30pt;
    color: #fff;
    letter-spacing: 1px;
    text-align: center;
    align-items: flex-end;
    display: flex;
    transform: rotate(-45deg) translate(-50px, -140px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #1e1e1e;
    z-index: 10;

    .homelab-logo {
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 64px;
      height: 64px;
    }

    @media screen and (max-width: 800px) {
      transform: rotate(0) translate(0, 0);
      height: 60px;
      width: 100%;
      padding: 0 10px 0 56px;
      animation: fade 300ms;

      .homelab-logo {
        top: 2.5px;
        left: 2.5px;
        transform: translateX(0) rotate(0);
        width: 50px;
        height: 50px;
      }
    }

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
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 80px;
    transition: margin 300ms;

    @media screen and (max-width: 800px) {
      margin-top: 60px;

      .nav-btn {
        margin: auto 0;
      }
    }

    .nav-btn {
      margin: auto 10px;
      text-decoration: none;
      color: #1e1e1e;
      padding: 10px 15px;
      position: relative;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-color: #ff3d8b;
        transform: scale(0.8);
        transform-origin: center;
        opacity: 0;
        transition: transform ease-in-out 100ms, opacity linear 100ms;
      }

      &:hover,
      &.selected {
        &::after {
          opacity: 0.25;
          transform: scale(1);
        }
      }

      &:focus {
        &::after {
          opacity: 0.4;
          transform: scale(1);
        }
      }
    }
  }
}
@keyframes fade {
  0% {
    transform: translateY(-100%);
  }
  100% {
    opacity: translateY(0);
  }
}
</style>
