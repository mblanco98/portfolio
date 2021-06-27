<template>
  <div class="main-wrapper">
    <div class="presentation__wrapper">
      <steps :data="steps" @done="handleDone" />
    </div>

    <div v-if="modal" class="overlay" />

    <XyzTransition mode="out-in" appear xyz="fade origin-bottom">
      <div v-if="modal" class="modal__wrapper">
        <header>
          Header title
          <span class="modal__close-btn" @click="modal = false"> X </span>
        </header>
        <div class="modal__body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            pariatur, numquam error magni labore eius nobis. Harum placeat
            asperiores commodi ut natus animi, dolore distinctio molestiae
            aliquid neque, laboriosam at!
          </p>
        </div>
        <div class="radio__wrapper">
          <span
            class="radio__input"
            :class="{ no: touched === 0 }"
            @click.stop="handleClickRadio(0)"
          >
            no
          </span>
          <span
            class="radio__input"
            :class="{ maybe: touched === 0.6 }"
            @click.stop="handleClickRadio(0.6)"
          >
            maybe
          </span>
          <span
            class="radio__input"
            :class="{ yes: touched === 1 }"
            @click.stop="handleClickRadio(1)"
          >
            yes
          </span>
        </div>
      </div>
    </XyzTransition>
  </div>
</template>

<script>
import Steps from '../../components/Steps.vue'

export default {
  name: 'Showcase',
  components: {
    Steps,
  },
  data: () => ({
    modal: true,
    touched: null,
  }),
  computed: {
    steps() {
      return [
        {
          id: 0,
          text: 'Some text',
        },
        {
          id: 1,
          text: 'Some text 1',
        },
        {
          id: 2,
          text: 'Some text 2',
        },
        {
          id: 3,
          text: 'Some text 3',
        },
        {
          id: 4,
          text: 'Some text 4',
        },
        {
          id: 5,
          text: 'Some text 5',
        },
      ]
    },
  },
  methods: {
    handleDone() {
      this.modal = true
    },
    handleClickRadio(num) {
      this.touched = num
    },
  },
  head() {
    return {
      title: 'Sin titulo',
    }
  },
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.presentation__wrapper {
  border: 1px solid #ccc;
  padding: 8rem;
}

.modal__wrapper {
  position: fixed;
  z-index: 22;
  left: auto;
  top: 22vh;

  width: 80vw;
  height: 50vh;
  padding: 4rem;
  background: rgb(56, 56, 56);

  header {
    margin-bottom: 2rem;
    font-size: 1.2em;
    line-height: 1.2;
    position: relative;
    .modal__close-btn {
      font-size: 0.8em;
      position: absolute;
      top: -2rem;
      right: 0;
      padding: 0.8rem;
      text-align: center;
      border-radius: 24px;
      transition: all 320ms ease;
      &:hover {
        cursor: pointer;
        background: #525251;
      }
    }
  }

  .modal__body {
    p {
      line-height: 1.5;
      font-size: 1.02em;
    }
  }

  .radio__wrapper {
    display: flex;
    max-width: 20rem;
    margin-top: 3.2rem;
    .radio__input {
      flex: 1;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #eee;

      &.yes,
      &.no {
        color: white;
      }

      &.maybe {
        color: black;
      }

      &.yes {
        background-color: #4747f3;
      }
      &.no {
        background-color: #ffa2a2;
      }
      &.maybe {
        background-color: #eded89;
      }
    }
  }
}

.overlay {
  position: absolute;
  z-index: 20;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
}
</style>
