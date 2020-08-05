<template>
  <div id="app">
    <transition
      tag="div"
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
