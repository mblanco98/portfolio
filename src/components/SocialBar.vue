<template>
  <nav
    class="nav-wrapper flex row nowrap justify-content-space-between w-fit-full p4"
  >
    <div v-for="(item, i) in socialLinks" :key="i">
      <div v-if="item.photo" class="logo-wrapper">
        <div class="img" />
      </div>
      <a v-else :href="item.link" target="_blank">
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<script>
import { social } from '../config'

export default {
  name: 'SocialBar',
  computed: {
    socialLinks() {
      return social
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/social-bar-styles.scss';
</style>
