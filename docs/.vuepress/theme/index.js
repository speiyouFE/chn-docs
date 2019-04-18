const path = require('path')
// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    const isAlgoliaSearch = (
      themeConfig.algolia ||
      Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js')
    }
  },
  // extend: '@vuepress/theme-default',
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/search',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale('zh-cn')
        return moment(timestamp).fromNow()
      }
    }]
  ]
})