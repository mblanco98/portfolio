<template>
  <div class="main-wrapper">
    <router-link id="home-link" to="/" class="mb2">
      <svg-wrapper size="xl" :custom-class="{ svg: true }">
        <svg
          xmlns:svg="http://www.w3.org/2000/svg"
          viewBox="0 0 100 125"
          fill="currentColor"
          version="1.1"
        >
          <path
            id="path4"
            d="M63,72.69H37a7.51,7.51,0,0,1-7.5-7.5v-16a2.5,2.5,0,1,1,5,0v16a2.5,2.5,0,0,0,2.5,2.5H63a2.5,2.5,0,0,0,2.5-2.5v-16a2.5,2.5,0,1,1,5,0v16A7.51,7.51,0,0,1,63,72.69Z"
          />
          <path
            id="path6"
            d="M71.92,46.15a2.49,2.49,0,0,1-1.6-.58L51.93,30.19,51.77,30a2.5,2.5,0,0,0-3.54,0l-.16.15L29.68,45.57a2.5,2.5,0,0,1-3.21-3.83L44.78,26.42a7.51,7.51,0,0,1,10.43,0L73.52,41.74a2.5,2.5,0,0,1-1.61,4.42Z"
          />
          <path
            id="path8"
            d="M50,95A45,45,0,1,1,76.36,13.53a2.5,2.5,0,0,1-2.93,4,40,40,0,1,0,11,12,2.5,2.5,0,0,1,4.3-2.55A45,45,0,0,1,50,95Z"
          />
          <path
            id="path10"
            d="M81.89,24.4A2.49,2.49,0,0,1,80,23.56q-.63-.71-1.28-1.39a2.5,2.5,0,1,1,3.59-3.48q.74.76,1.44,1.56a2.5,2.5,0,0,1-1.87,4.15Z"
          />
        </svg>
      </svg-wrapper>
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
          :href="`mailto:${contactData.email}`"
          class="font-thin text-md block margin1 hover:underline mb4"
          >{{ contactData.email }}</a
        >
        <a
          :href="`tel:${contactData.phone}`"
          class="font-thin text-md block margin-top-half-rem hover:underline"
          >{{ contactData.phone }}
        </a>
        <footer>© {{ year }} Manuel Blanco</footer>
      </div>
    </div>
    <div class="right">
      <div id="backgroundBlack" class="absolute" />
      <!-- <img src="https://media.giphy.com/media/3o7TKo69Ajc6LuzOs8/giphy.gif" /> -->
      <div id="gifWrapper" class="text-center">
        <img src="https://media.giphy.com/media/3o7bukPWLMVsRz38J2/giphy.gif" />
        <h1 class="title text-white">
          Say hi.
          <span class="highlight">Like this guy.</span>
        </h1>
        <div class="inline-block button-link">
          <a
            :href="`mailto:${contactData.email}`"
            class="text-center font-semibold inverse"
          >
            {{ contactData.email }}
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
import { contact } from '../config'
import metadata from '../config/metadata/contact-metadata.json'

export default {
  name: 'Contact',
  components: {
    SvgWrapper: () => import('../components/SvgWrapper'),
  },
  computed: {
    year() {
      const d = new Date()
      return d.getFullYear()
    },
    contactData() {
      return contact
    },
  },
  mounted() {
    if (window.innerWidth > 980) this.enterAnimation()
  },
  methods: {
    enterAnimation() {
      const r = new Scene(
        {
          '#backgroundBlack': () => ({
            0: {
              opacity: 0,
              transform: {
                translateY: '-200%',
              },
            },
            1: {
              opacity: 1,
              transform: {
                translateY: '0%',
              },
            },
          }),
        },
        {
          easing: 'ease',
          selector: true,
          direction: 'forwards',
        }
      ).playCSS()
      if (r.isEnded) this.giftEntrance()
    },
    giftEntrance() {
      new Scene(
        {
          '#gifWrapper': () => ({
            0: {
              opacity: 0,
            },
            1: {
              opacity: 1,
              display: 'block',
            },
          }),
        },
        {
          delay: 1,
          easing: 'ease',
          selector: true,
          direction: 'forwards',
        }
      ).playCSS()
    },
  },
  head: metadata,
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/pages/contact-styles.scss';
</style>
