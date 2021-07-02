import metadata from './config/metadata/home-metadata.json'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  loading: {
    color: '#648dff',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: metadata.title,
    meta: [...metadata.meta],
    link: [...metadata.link],
    script: [
      ...metadata.script,
      {
        src: 'https://kit.fontawesome.com/6951ff9630.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['./assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/animxyz.js', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    build: {
      devtools: true,
      extend(config, ctx) {
        // Run ESLint on save
        if (ctx.isDev && ctx.isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true,
            },
          })
        }
      },
    },
  },
}
