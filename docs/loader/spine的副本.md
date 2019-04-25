# Spine

## 使用指南

### 示例代码
页面挂载成功，就应该进行如下配置
```js
// 引入 sealui-phaser
import { PhaserSpine, PhaserNavigator } from 'sealui-phaser'

// 配置Phaser
const gameApp = new window.Phaser.Game(width, height, renderer, parent, state, transparent, antialias)

 // 初始化插件
PhaserSpine.SpineInit(gameApp)

 // 注册导航
const phaserNavigator = new PhaserNavigator()

// 注册互动组件
phaserNavigator.reg('dragon', Dragon)
phaserNavigator.reg('spine', Spine)

// 添加导航到game state中
gameApp.state.add('phaserNavigator', phaserNavigator)
gameApp.state.start('phaserNavigator', false, false, {
  disableVisibilityChange: true
})

// 挂载导航到window (可选)
window.phaserNavigator = phaserNavigator
```

## 在 VUE 中使用
### 示例代码
以下代码，将会在 `ref="interactive"` 上自动生成一个 `canvas`
```html
<template>
  <div id="app">
    <div ref="interactive" class="interactive"></div>
  </div>
</template>

<script>
import { PhaserSpine, PhaserNavigator } from 'sealui-phaser'
import demoSpine from './demoSpine' // 引入互动文件
export default {
  // ...
  mounted () {
    this.$nextTick(function () {
      const gameApp = new window.Phaser.Game(800, 600, window.Phaser.CANVAS, this.$refs.interactive, null, true)
      PhaserSpine.SpineInit(gameApp)
      const phaserNavigator = new PhaserNavigator()

      // 注册互动组件
      phaserNavigator.reg('demoSpine', demoSpine)

      gameApp.state.add('phaserNavigator', phaserNavigator)
      gameApp.state.start('phaserNavigator', false, false, {
        disableVisibilityChange: true
      })
      window.phaserNavigator = phaserNavigator
    })
  }
}
</script>
```

## 在 React 中使用
```jsx
import React, { Component } from 'react'
import { PhaserSpine, PhaserNavigator } from 'sealui-phaser'
import demoSpine from './demoSpine' // 引入互动文件

export default class Index extends Component {
  // ...
  componentDidMount () {
    const gameApp = new window.Phaser.Game(800, 600, window.Phaser.CANVAS, 'app', null, true)
    PhaserSpine.SpineInit(gameApp)
    const phaserNavigator = new PhaserNavigator()

    // 注册互动组件
    phaserNavigator.reg('demoSpine', demoSpine)

    gameApp.state.add('phaserNavigator', phaserNavigator)
    gameApp.state.start('phaserNavigator', false, false, {
      disableVisibilityChange: true
    })
    window.phaserNavigator = phaserNavigator
  }
}
```

[[toc]]