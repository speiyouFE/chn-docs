# Spine插件

## 使用指南

### 示例代码
```js
import { Spine, PhaserComponent } from 'sealui-phaser'

export default class SpineDemo extends PhaserComponent {
  constructor () {
    super('Spine') // 这里需要告诉PhaserComponent，使用什么加载器
  }
}
```

## API
### play()
播放动画
```js
this.demo = new Spine('demo')

this.demo.play(animationName, loop)
```
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| animationName      | 动效名 | string |
| loop      | 是否循环 | boolean |

### gotoAndPlay()
跳转到第几帧播放
```js
this.demo = new Spine('demo')

this.demo.gotoAndPlay(index, animationName, loop)
```
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| index      | 跳转的帧 | number |
| animationName      | 动效名 | string |
| loop      | 是否循环 | boolean |

### stop()
停止播放动画
```js
this.demo = new Spine('demo')

this.demo.stop(index)
```
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| index      | 停止动画到第几帧 | number |

### addAnimation()
添加一个动画
```js
this.demo = new Spine('demo')

this.demo.addAnimation(index, animationName, loop, delay)
```
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| index      | 动画帧 | number |
| animationName      | 动画名称 | string |
| loop      | 是否循环播放 | boolean |
| delay      | 延迟播放, 单位：ms | number |

### changeAttachment()
改变插槽里的附件
```js
this.demo = new Spine('demo')

this.demo.changeAttachment(slotName, attachmentName)
```
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| slotName      | 插槽名称 | string |
| attachmentName      | 附件名称 | string |


## 事件
### onComplete()
```js
this.demo = new Spine('demo')

this.demo.onComplete(callback)
```

### onEnd()
```js
this.demo = new Spine('demo')

this.demo.onEnd(callback)
```

### onDown()
```js
this.demo = new Spine('demo')

this.demo.onEnd(callback)
```

### 例子

```js
import { Spine, PhaserComponent } from 'sealui-phaser'

export default class SpineDemo extends PhaserComponent {
  constructor () {
    super('Spine')
  }
  /**
   * 初始化项目
   * 一些初始化的东西，都在这里进行
   * @return {[type]}   [description]
   */
  init (args) {
    // args 是后端传递过来的数据集合
  }

  /**
   * 预加载资源
   * 所以的静态资源(视频、音频、图片、字体、龙骨)都必须现在这里进行加载
   * @return {[type]}   [description]
   */
  preload () {
    // 预加载spine资源文件
    this.demo = new Spine('demo')
  }

  /**
   * 创建场景
   * 这里是把需要的东西加入的播放舞台，比如动效、图片等
   * @return {[type]}   [description]
   */
  create () {
    // 添加spine到游戏中
    this.game.add(this.demo)
    this.demo.x = x
    this.demo.y = y
    // 播放spine的animation
    this.demo.play('xxx')
  }

  /**
   * 卸载场景
   * 在页面进行转场后，必须卸载掉场景里的缓存资源，否则，会造成内存移除，搞蹦互动
   * @return {[type]}   [description]
   */
  shutdown () {
    return new Promise((resolve) => {
      // ...
      resolve()
    }
  }
}
```

[[toc]]