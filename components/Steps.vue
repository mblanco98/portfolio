<template>
  <div class="steps__main-wrapper">
    <div class="steps__wrapper">
      <XyzTransition
        mode="out-in"
        appear
        xyz="fade small out-flip-down appear-stagger"
      >
        <div v-if="currentStep" :key="step" class="item">
          <p class="item__text">
            {{ currentStep.text }}
          </p>
        </div>
      </XyzTransition>
    </div>
    <footer class="steps__footer">
      <button :disabled="step === 0" @click.stop="handlePrevStep">
        Anterior
      </button>
      <button :disabled="step === dataLength" @click.stop="handleNextStep">
        Siguiente
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    step: 0,
    currentStep: null,
  }),
  computed: {
    dataLength() {
      return this.data.length - 1
    },
  },
  watch: {
    step(num) {
      if (num === this.dataLength) {
        setTimeout(() => {
          this.$emit('done')
        }, 4000)
      }
    },
  },
  mounted() {
    if (!this.currentStep) this.currentStep = this.data[0]
  },
  methods: {
    handlePrevStep() {
      if (this.step === 0) return
      this.step -= 1
      this.currentStep = this.data[this.step]
    },
    handleNextStep() {
      if (this.step === this.dataLength) return
      this.step += 1
      this.currentStep = this.data[this.step]
    },
  },
}
</script>

<style lang="scss" scoped>
$border-color: #ccc;
$border-default: 1px solid $border-color;

.steps__main-wrapper {
  width: 80vw;
  min-height: 60vh;
  position: relative;
  border: $border-default;
}

.steps__wrapper {
  height: 60vh;
  overflow: hidden;
}

.item {
  width: 100%;
  padding: 1.2rem;
  min-height: 60vh;

  display: flex;
  align-items: center;
  justify-content: center;
  .item__text {
    color: #ccc;
    font-size: 4.4em;
    line-height: 1.2;
    @media screen and (min-width: 890px) {
      font-size: 8em;
    }
    @media screen and (min-width: 1024px) {
      font-size: 16em;
    }
  }
}

.steps__footer {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    padding: 1rem;
    color: white;
    font-size: 1.02em;
    transition: all 320ms ease;
    &:hover {
      background: #575757;
    }
    &:focus {
      outline: 0;
      background: #414141;
    }
    &:disabled {
      color: #6f6f6f;
      &:hover {
        background: transparent;
      }
    }
  }
}
</style>
