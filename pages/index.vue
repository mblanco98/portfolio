<template>
  <div id="top">
    <div class="overlay-1 shadow-top" aria-hidden="true" />
    <div class="overlay-2 shadow-bottom" aria-hidden="true" />
    <i-svg-wrapper id="top-svg" class="svg fixed hidden-md-and-down">
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
    <div class="main-wrapper pl4 pr4 relative">
      <i-navbar id="mobile-nav" class="hidden-lg-and-up mobile-nav" />
      <aside class="left" role="region">
        <i-greet />
        <i-navbar id="nav" class="hidden-md-and-down" />
        <div
          class="
            relative
            social-bar-wrapper
            flex
            justify-content-flex-end
            hidden-md-and-down
          "
        >
          <i-social-bar class="social-bar" />
        </div>
      </aside>
      <div class="right mb20 p0">
        <section id="work" role="contentinfo">
          <header>
            <h1 class="title md mb10">Work</h1>
          </header>
          <div class="flex column">
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
          </div>
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
        <div id="contact" class="text-right mr5">
          <router-link to="/contact"> Contact me </router-link>
        </div>
      </div>
    </div>
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
