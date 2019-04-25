'use strict';
const path = require('path')
const slugify           = require('transliteration').slugify
const CopyWebpackPlugin = require('copy-webpack-plugin')
const tools = require('./theme/util/tools')
const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = {
  // base: '/',
  title: '在线文档',
  description: '在线文档',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: `/favicons.ico` }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '动效加载器', link: '/loader/spine/getStart'}
      // { text: '404', link: '/test1' },
      // { text: 'DEMO', link: '/about/' },
      // { text: 'TEST', link: '/test/' }
    ],
    sidebar: [
      {
        title: 'Spine',
        children: [
          '/loader/spine/getStart',
          '/loader/spine/vue',
          '/loader/spine/react',
          '/loader/spine/plugin',
        ]
      },
      {
        title: 'Phaser',
        collapsable: true,
        children: [
          '/phaser/easing',
          '/phaser/text',
          '/phaser/video',
          '/phaser/audio',
          '/phaser/image',
          '/phaser/draw'
        ]
      },
      {
        title: 'DragonBones',
        children: [
          '/loader/dragonBones',
        ]
      }
    ],
    lastUpdated: '最后更新',
    editLinks: false,
    // docsDir: 'docs',
    // editLinkText: '帮助我们改善此页面！',
    // repo: 'fedguide/docs',
    // repoLabel: '查看源码',
  },
  chainWebpack (config) {
    config.resolve
      .alias
        .set('@imgs', path.resolve(__dirname, '../assets/img/'))
        // .set('@animation', path.resolve(__dirname, '../assets/animation/'))
        .end()
    // isEnvProduction &&
    // config.output
    //   .library('DOCS')
    //   .libraryTarget('commonjs2')
    //   .umdNamedDefine(true)
    //   .end()
    // config
    //   .plugin('copy')
    //   .use(CopyWebpackPlugin, [[
    //   {
    //     from: path.resolve(__dirname, '../assets/animation/'),
    //     to: 'assets/animation',
    //     ignore: ['.*']
    //   }
    // ]])
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