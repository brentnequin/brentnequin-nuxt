export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brent Nequin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    // '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-buefy', { css: false }],
    '@nuxt/content',
    'nuxt-breakpoints',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],

  buefy: {
    defaultIconComponent: 'FontAwesomeIcon',
    materialDesignIcons: false
  },

  fontawesome: {
    imports: [
      {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
      },
      {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
      }
    ]
  },

  apollo: {
    clientConfigs: {
      default: '@/apollo/config/config.js'
    }
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
