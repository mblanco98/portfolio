<template>
  <div
    id="app"
    aria-roledescription="This is a simple container for the application"
  >
    <transition
      tag="div"
      aria-hidden="true"
      mode="out-in"
      name="animated faster"
      leave-active-class="fadeOut"
      enter-active-class="fadeIn"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import 'normalize.css'
export default { name: 'App' }
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
