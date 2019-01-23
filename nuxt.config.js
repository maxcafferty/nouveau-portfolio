const pkg = require('./package')

const webpack = require('webpack')

const config = require('./.contentful.json')

const client = require('./plugins/contentful')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'}
    ]
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PROJECT_TYPE_ID: config.CTF_PROJECT_TYPE_ID
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7957d5' },

  /*
  ** Global CSS
  */
  css: [ { src: '~mybulma/css/mystyles.css', lang: 'css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ '~/plugins/contentful' ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-buefy',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    routes: [
      '/workdetail/portfolio-fanny-martin',
      '/workdetail/sombral-guitars',
      '/workdetail/ancien-portfolio'
    ]
  },
  /*
  ** Build configuration
  */
  build: { extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, ctx) {
      
    }
  },
  generate: {
    routes: [
      '/workdetail/portfolio-fanny-martin',
      '/workdetail/sombral-guitars',
      '/workdetail/ancien-portfolio'
    ]
  },
}
