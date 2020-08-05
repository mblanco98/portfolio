<template>
  <nav class="nav-wrapper flex column wrap" role="navigation">
    <div
      v-for="(link, i) in links"
      :key="link.label"
      class="link mb4 transition-all"
      :class="{
        active: $route.hash == link.to
      }"
    >
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
