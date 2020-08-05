<template>
  <div
    class="svg-wrapper"
    aria-hidden="true"
    role="presentation"
    :class="{
      ...customClass,
      md: size == 'md',
      sm: size == 'sm',
      lg: size == 'lg',
      xl: size == 'xl'
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SvgWrapper',
  props: {
    size: {
      type: String,
      default: () => ''
    },
    customClass: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/components/svg-wrapper-styles.scss';
</style>
