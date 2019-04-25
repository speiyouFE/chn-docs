# 在Vuejs中使用

## 使用指南

:::tip
代码应该挂载在vue的入口页上，例如：`app.vue`
:::

### 示例代码
```html
<template>
  <div id="app">
    <div ref="interactive" class="interactive">
      <!-- phaser创建的canvas,将挂载在这里-->
    </div>
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

[[toc]]