<template>
  <div class="i-card p2" :class="{ md }">
    <div class="i-card i-card__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ICard',
  props: {
    lg: {
      type: Boolean,
      default: () => true
    },
    md: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/card-styles.scss';
</style>
