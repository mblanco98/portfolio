<template>
  <div id="top">
    <div class="overlay-1 shadow-top" aria-hidden="true" />
    <div class="overlay-2 shadow-bottom" aria-hidden="true" />
    <div class="main-wrapper pl4 pr4 z-index4">
      <i-navbar id="mobile-nav" class="hidden-md-and-up mobile-nav" />
      <aside class="left" role="region">
        <i-greet />
        <i-navbar id="nav" class="hidden-md-and-down" />
        <div
          class="relative social-bar-wrapper flex justify-content-flex-end hidden-md-and-down"
        >
          <i-social-bar class="social-bar" />
        </div>
      </aside>
      <div class="right">
        <section id="work" role="contentinfo">
          <header>
            <h1 class="title md mb10">Work</h1>
          </header>
          <i-card v-for="(pr, i) in projects" :key="i" class="mb12 p8">
            <div>
              <header p0>
                <h2 class="title fs-medium m0 highlight">
                  {{ pr.name }}
                </h2>
              </header>
              <p class="text-justify fs-regular">
                {{ pr.content }}
              </p>
              <footer class="flex row nowrap justify-content-end">
                <a
                  target="_blank"
                  :href="pr.link"
                  class="underline cursor-pointer"
                >
                  Visit website
                  <i class="eva eva-external-link-outline" />
                </a>
              </footer>
            </div>
          </i-card>
        </section>
        <section id="pens" class="mt12 pt4" role="contentinfo">
          <header>
            <h1 class="title md mb10">Pens</h1>
          </header>
          <div class="pens-wrapper">
            <i-card v-for="(pen, i) in pens" :key="i" class="mb12 p3" md>
              <div>
                <header class="pt2 pb4 pl1">
                  <h2 class="title fs-medium m0">
                    <a :href="pen.src" target="_blank">
                      <span class="highlight">
                        {{ pen.name }}
                        <i class="eva eva-external-link-outline" />
                      </span>
                    </a>
                  </h2>
                </header>
                <p
                  data-default-tab="result"
                  :data-pen-title="pen.name"
                  :data-slug-hash="pen.slug"
                  data-theme-id="dark"
                  data-preview="true"
                  data-user="manAbl"
                  data-height="420"
                  class="codepen pen"
                >
                  <span
                    >See the Pen
                    <a :href="pen.src" target="_blank" class="underline">
                      {{ pen.name }}
                      <i class="eva eva-external-link-outline" />
                    </a>
                    by mblanco (<a href="https://codepen.io/manAbl">{{
                      pen.user
                    }}</a
                    >) on <a href="https://codepen.io">CodePen</a>.</span
                  >
                </p>
              </div>
            </i-card>
          </div>
        </section>
        <div id="contact" class="text-right mt12">
          <router-link to="/contact"> Contact me </router-link>
        </div>
      </div>
    </div>
    <i-svg-wrapper id="top-svg" class="svg hidden-md-and-down">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="fillContent"
        height="fillContent"
        viewBox="0 0 2737.094 2722.149"
      >
        <path
          d="M884.633-184.073c334.82-691.7,1542.231,477.837,1321.857,564.51s-664.308,845.412-1213,845.412S0,953.61,0,617.786,549.813,507.626,884.633-184.073Z"
          transform="matrix(0.719, 0.695, -0.695, 0.719, 851.546, 289.056)"
          fill="#262626"
        />
      </svg>
    </i-svg-wrapper>
    <i-svg-wrapper id="bottom-svg" class="svg hidden-md-and-down">
      <svg
        id="svg855"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 2000 2000"
        height="fillContent"
        width="fillContent"
      >
        <defs id="defs849">
          <filter
            id="a"
            filterUnits="userSpaceOnUse"
            height="2691.165"
            width="2708.384"
            y="0"
            x="0"
          >
            <feOffset id="feOffset838" input="SourceAlpha" dy="10" />
            <feGaussianBlur
              id="feGaussianBlur840"
              result="b"
              stdDeviation="6"
            />
            <feFlood
              id="feFlood842"
              flood-opacity="0.89"
              flood-color="#212121"
            />
            <feComposite
              id="feComposite844"
              result="result1"
              in2="b"
              operator="in"
            />
            <feComposite id="feComposite846" in2="result1" in="SourceGraphic" />
          </filter>
        </defs>
        <path
          id="path865-5"
          d="m 567.02929,12.413976 c -6.0021,-0.066 -12.0952,0.9941 -18.291,3.296801 -236.4338,87.879703 -406.78141,97.143503 -537.208922,78.6543 V 530.89038 H 1300.4063 C 1225.7028,419.65268 1102.7918,367.68708 913.12309,442.71458 773.35639,480.83728 689.07169,13.750976 567.02929,12.413976 Z"
          style="fill: #262626; stroke-width: 0.99724621"
        />
      </svg>
    </i-svg-wrapper>
  </div>
</template>

<script>
import { work, pens } from '../config'
import 'eva-icons/style/eva-icons.css'
import metadata from '../config/metadata/home-metadata.json'

export default {
  name: 'Home',
  components: {
    ICard: () => import('../components/Card.vue'),
    IGreet: () => import('../components/Greet.vue'),
    INavbar: () => import('../components/Navbar.vue'),
    ISvgWrapper: () => import('../components/SvgWrapper'),
    ISocialBar: () => import('../components/SocialBar.vue'),
  },
  computed: {
    projects() {
      return work
    },
    pens() {
      return pens
    },
  },
  head: {
    ...metadata,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/home-styles.scss';
</style>
