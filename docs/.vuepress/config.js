'use strict';
const path = require('path')
const slugify           = require('transliteration').slugify
const CopyWebpackPlugin = require('copy-webpack-plugin')
const tools = require('./theme/util/tools')
const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = {
  title: '学而思大语文在线文档',
  description: '学而思大语文在线文档',
  // dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicons.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '404', link: '/test1' },
      { text: 'DEMO', link: '/about/' },
      { text: 'TEST', link: '/test/' },
      { text: 'GitLab', link: 'http://ssgitlab.speiyou.com/chinese/chn-iscreen-beibo'}
    ],
    sidebar: {
      '/about/': tools.getAboutSidrsBar('关于项目', '简介', '测试', '简介'),
      '/test/': tools.getTestSiderBar('测试', '简介'),
    },
    lastUpdated: '最后更新',
  },
  chainWebpack (config) {
    config
      .resolve
      .alias
      .set('@imgs', path.resolve(__dirname, '../assets/img/'))
      .set('@animation', path.resolve(__dirname, '../assets/animation/'))
    isEnvProduction &&
    config.externals({
        'vue': 'Vue',
        'vuex': 'Vuex',
        'axios': 'axios',
        'vue-router': 'VueRouter'
      })
    config.output
      // .filename(isEnvProduction
      //   ? 'static/js/[name].[chunkhash:8].js'
      //   : isEnvDevelopment && 'static/js/bundle.js')
      // .chunkFilename(isEnvProduction
      //   ? 'static/js/[name].[chunkhash:8].chunk.js'
      //   : isEnvDevelopment && 'static/js/[name].chunk.js')
      .library('TAL_CHN')
      .libraryTarget('umd')
      .umdNamedDefine(true)
      .end()
    config
      .plugin('copy')
      .use(CopyWebpackPlugin, [[
      {
        from: path.resolve(__dirname, '../assets/animation/'),
        to: 'assets/animation',
        ignore: ['.*']
      }
    ]])
  },
  markdown: {
    toc: {
      includeLevel: [2, 3],
      slugify: slugify,
      forceFullToc:true
    },
    anchor: {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true
    },
    lineNumbers: false,
    extendMarkdown: md => {
      md
      .use(...tools.createContainer('tip'))
      .use(...tools.createContainer('info'))
      .use(...tools.createContainer('success'))
      .use(...tools.createContainer('danger'))
      .use(...tools.createContainer('warning'))
      .use(...tools.createDemoContainer('demo'))
    }
  }
}