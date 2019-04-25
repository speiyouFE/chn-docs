# 快速开始

## 安装依赖包
```sh 
npm i sealui-phaser -S

# 或者使用yarn 

yarn add sealui-phaser -S
```

## 示例代码
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

[[toc]]