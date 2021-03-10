export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'riverApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is My  App' }
    ],
    link: [
      {rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&family=Raleway&display=swap'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/menu.css',
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/contentful',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/content',
    ['@nuxtjs/proxy', { ws: false }]
  ],
  axios: {

  },


  publicRuntimeConfig: {
    lambdaURL: process.env.LAMBDA_URL,
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
