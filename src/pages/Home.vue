<template>
  <div class="main-wrapper pt12 pb2 pl4 pr4">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="2773.094"
        height="2758.149"
        viewBox="0 0 2773.094 2758.149"
      >
        <defs>
          <filter
            id="a"
            x="0"
            y="0"
            width="2773.094"
            height="2758.149"
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
            d="M884.633-184.073c334.82-691.7,1542.231,477.837,1321.857,564.51s-664.308,845.412-1213,845.412S0,953.61,0,617.786,549.813,507.626,884.633-184.073Z"
            transform="matrix(0.72, 0.69, -0.69, 0.72, 869.55, 297.06)"
            fill="#262626"
          />
        </g>
      </svg>
    </div>
    <div class="left z-index4">
      <i-greet />
      <nav>
        <a href="#pens">Pens</a>
      </nav>
      <div class="relative social-bar-wrapper flex justify-content-flex-end">
        <i-social-bar class="social-bar" />
      </div>
    </div>
    <div class="right mt4 overflow-y-auto no-overflow-x z-index4">
      <section id="work">
        <header>
          <h1 class="title md">
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
      <section id="pens">
        <header>
          <h1 class="title md">
            Pens
          </h1>
        </header>
        <div class="pens-wrapper">
          <i-card v-for="(pr, i) in pens" :key="i" class="mb12 p8" md>
            <div>
              <header p0>
                <h2 class="title fs-medium m0">
                  {{ `${pr.name} ${i}${i}` }}
                </h2>
              </header>
              <p class="text-justify">
                {{ pr.content }}
              </p>
            </div>
          </i-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { work, pens } from '../config'

export default {
  components: {
    IGreet: () => import('../components/Greet.vue'),
    ICard: () => import('../components/Card.vue'),
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
