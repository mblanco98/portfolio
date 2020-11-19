<script>
/* eslint-disable vue/no-v-html */
import { description } from '../config'
export default {
  computed: {
    description() {
      return description
    },
  },
}
</script>

<template>
  <div>
    <h1 class="title lg" role="heading">
      <span class="highlight"> Hello, </span>
      I'm
      <br />
      {{ `${description.name}` }}.
    </h1>
    <div class="divider mt12" />
    <p v-html="description.presentation" />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/components/greet-styles.scss';
</style>
