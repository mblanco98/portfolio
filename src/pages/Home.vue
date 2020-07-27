<template>
  <div class="main-wrapper pt12 pb2 pl4 pr4">
    <greet class="left" />
    <div class="right">
      <section>
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
    </div>
  </div>
</template>

<script>
import { work } from '../config'

export default {
  components: {
    Greet: () => import('../components/Greet.vue'),
    ICard: () => import('../components/Card.vue')
  },
  computed: {
    projects() {
      return work
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/home-styles.scss';
</style>
