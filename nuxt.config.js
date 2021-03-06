const baseName = '名人のポートフォリオ'
const baseDesc =
  'Web技術を中心にITによる価値創造を仕事としている名人（Yusuke Saito）のポートフォリオ。経歴、SNSやGithubのURL、およびスキルについて掲載しています'
const baseUrl = 'https://meijin.dev'
const baseOgp = '/ogp.jpg'

module.exports = {
  target: 'static',
  srcDir: 'src',
  /*
   ** Headers of the page
   */
  head: {
    title: `${baseName}`,
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: baseDesc,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: baseName,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'artice',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseUrl,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: baseName,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: baseDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: baseOgp,
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: '@Meijin_garden',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon_20200316.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Comfortaa&display=swap',
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Comfortaa&display=swap',
      },
    ],
  },
  plugins: [
    {
      src: '~plugins/vue-lazyload',
      mode: 'client',
    },
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#33b0dd',
  },
  modules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-143780066-1',
      },
    ],
  ],
  buildModules: ['@nuxt/typescript-build'],
  styleResources: {
    scss: ['~/assets/css/main.scss'],
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
