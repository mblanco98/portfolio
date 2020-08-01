<template>
  <div>
    <div class="main-wrapper pl4 pr4 z-index4">
      <aside class="left">
        <i-greet />
        <nav>
          <a href="#pens">Pens</a>
        </nav>
        <div class="relative social-bar-wrapper flex justify-content-flex-end">
          <i-social-bar class="social-bar" />
        </div>
      </aside>
      <div class="right">
        <section id="work">
          <header>
            <h1 class="title md mb10">
              Work
            </h1>
          </header>
          <i-card v-for="(pr, i) in projects" :key="i" class="mb12 p8">
            <div>
              <header p0>
                <h2 class="title fs-medium m0">
                  {{ pr.name }}
                </h2>
              </header>
              <p class="text-justify">
                {{ pr.content }}
              </p>
            </div>
          </i-card>
        </section>
        <section id="pens" class="mt12 pt4">
          <header>
            <h1 class="title md mb10">
              Pens
            </h1>
          </header>
          <div class="pens-wrapper">
            <i-card v-for="(pen, i) in pens" :key="i" class="mb12 p3" md>
              <div>
                <header class="pt2 pb4 pl1">
                  <h2 class="title fs-medium m0">
                    <a :href="pen.src" target="_blank">
                      {{ pen.name }}
                      <fa :icon="['fas', 'external-link-alt']" />
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
                      <fa
                        :icon="['fas', 'external-link-alt']"
                        class="fs-small"
                      />
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
        <div class="text-right mt12" id="contact">
          <router-link to="/contact">
            Contact me
          </router-link>
        </div>
      </div>
    </div>
    <svg-wrapper id="top-svg" class="svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2737.094"
        height="2722.149"
        viewBox="0 0 2737.094 2722.149"
      >
        <path
          d="M884.633-184.073c334.82-691.7,1542.231,477.837,1321.857,564.51s-664.308,845.412-1213,845.412S0,953.61,0,617.786,549.813,507.626,884.633-184.073Z"
          transform="matrix(0.719, 0.695, -0.695, 0.719, 851.546, 289.056)"
          fill="#262626"
        />
      </svg>
    </svg-wrapper>
    <svg-wrapper id="bottom-svg" class="svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="2708.384"
        height="2691.165"
        viewBox="0 0 2708.384 2691.165"
      >
        <defs>
          <filter
            id="a"
            x="0"
            y="0"
            width="2708.384"
            height="2691.165"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="6" result="b" />
            <feFlood flood-color="#212121" flood-opacity="0.89" />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#a)">
          <path
            d="M731.5-152.919C793.11-280.192,1213.156,34.108,1291.57-96.591,1592-751.683,2386.316,309.712,2206.491,380.437c-220.373,86.673-664.308,845.412-1213,845.412S0,953.61,0,617.786,396.682,538.78,731.5-152.919Z"
            transform="matrix(0.72, 0.69, -0.69, 0.72, 869.55, 230.41)"
            fill="#262626"
          />
        </g>
      </svg>
    </svg-wrapper>
  </div>
</template>

<script>
import { work, pens } from '../config'

export default {
  metaInfo: {
    title: 'Home - Manuel Blanco Front End Developer',
    script: [
      { src: 'https://static.codepen.io/assets/embed/ei.js', async: true }
    ]
  },
  components: {
    ICard: () => import('../components/Card.vue'),
    IGreet: () => import('../components/Greet.vue'),
    SvgWrapper: () => import('../components/SvgWrapper'),
    ISocialBar: () => import('../components/SocialBar.vue')
  },
  computed: {
    projects() {
      return work
    },
    pens() {
      return pens
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/home-styles.scss';
</style>
