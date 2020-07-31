<template>
  <div class="main-wrapper">
    <router-link to="/">
      Home
    </router-link>
    <div class="left">
      <h3 class="text-gray font-thin uppercase">Contact</h3>
      <h1 class="title xl">
        Get in touch
        <span class="ml-4 highlight">:</span>
      </h1>
      <div class="information">
        <h3 class="fs-medium font-regular highlight">Contact Details:</h3>
        <a
          href="mailto:manuel.22.lamas@gmail.com"
          class="font-thin text-md block margin1 hover:underline mb4"
          >manuel.22.lamas@gmail.com</a
        >
        <a
          href="tel: +57 305 3648811"
          class="font-thin text-md block margin-top-half-rem hover:underline"
          >+57 305 3648811</a
        >
        <footer>© {{ year }} Manuel Blanco</footer>
      </div>
    </div>
    <div class="right">
      <div id="backgroundBlack" class="absolute" />
      <!-- <img src="https://media.giphy.com/media/3o7TKo69Ajc6LuzOs8/giphy.gif" /> -->
      <div id="gifWrapper" class="text-center">
        <img src="https://media.giphy.com/media/3o7bukPWLMVsRz38J2/giphy.gif" />
        <h1 class="title lg text-white">
          Say hi.
          <span class="highlight">Like this guy.</span>
        </h1>
        <div class="inline-block">
          <a
            :href="buttonOutline.link"
            :class="{ inverse: buttonOutline.inverse }"
            class="button-link border-gray-100 text-center font-semibold"
          >
            {{ buttonOutline.label }}
            <i
              class="icon margin-left-1rem transition inline-block fas arrow-right"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scene from 'scenejs'

export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact - Manuel Blanco Front End Developer'
  },
  data: () => ({
    buttonOutline: {
      inverse: true,
      icon: ['fas', 'arrow-right'],
      link: 'mailto:manuel.22.lamas@gmail.com',
      label: 'manuel.22.lamas@gmail.com'
    }
  }),
  computed: {
    year() {
      const d = new Date()
      return d.getFullYear()
    }
  },
  mounted() {
    this.enterAnimation()
  },
  methods: {
    enterAnimation() {
      const r = new Scene(
        {
          '#backgroundBlack': () => ({
            0: {
              opacity: 0,
              transform: {
                translateY: '-200%'
              }
            },
            1: {
              opacity: 1,
              transform: {
                translateY: '0%'
              }
            }
          })
        },
        {
          easing: 'ease',
          selector: true,
          direction: 'forwards'
        }
      ).playCSS()
      if (r.isEnded) this.giftEntrance()
    },
    giftEntrance() {
      new Scene(
        {
          '#gifWrapper': () => ({
            0: {
              opacity: 0
            },
            1: {
              opacity: 1,
              display: 'block'
            }
          })
        },
        {
          delay: 1,
          easing: 'ease',
          selector: true,
          direction: 'forwards'
        }
      ).playCSS()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/pages/contact-styles.scss';
</style>
