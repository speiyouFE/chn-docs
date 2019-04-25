# 在React中使用

## 使用指南

:::tip
代码应该挂载在react的入口页上，例如：`index.jsx`
:::

### 示例代码

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

  // ...

  render () {
    return (
      <div id="app">
      {/* phaser创建的canvas,将挂载在这里 */}
      </div>
    )
  }
}
```

[[toc]]