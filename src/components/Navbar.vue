<template>
  <nav class="nav-wrapper flex column wrap">
    <div v-for="(link, i) in links" :key="link.label" class="link mb4">
      <a :href="link.to" class="inline-block">
        0{{ i }}
        <span class="label">
          {{ link.label }}
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
import { navigation } from '../config'

export default {
  name: 'Navbar',
  computed: {
    links() {
      return navigation
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/navbar-styles.scss';
</style>
