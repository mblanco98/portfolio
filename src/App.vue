<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'App',
  components: {
    Home: () => import('./pages/Home')
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
