<template>
  <section id="ueber" class="section section-5">
    <div class="overview">
      <div class="overview-box">
        <div v-if="about" class="content">
          <h2>{{ about.title }}</h2>
          <nuxt-content :document="about" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutSection',
  data() {
    return {
      about: null,
    };
  },
  async fetch() {
    const about = await this.$content('about').fetch();
    this.about = about;
  },
});
</script>

<style lang="scss"></style>
