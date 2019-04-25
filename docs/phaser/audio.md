# 音频

## 加载资源
1. 加载单一资源
```js
game.load.audio(key, url, autoDecode?);
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| key      | 自定义音频的变量名，在后面代码中可直接引用 | string |
| url  | 音频的路径 | string |
| autoDecode | 音频是加载时解码还是运行时解码，默认值为true，即立即解码，音频只有解码后才能播放，解码是一个非阻塞的异步过程，但是会消耗大量CPU | boolean |

2. 加载audiosprite资源
```js
game.load.audiosprite(key, urls, jsonURL?, jsonData?, autoDecode?);
```
## 添加进场景
```js
game.add.audio(key, volume, loop)
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| key      | 预加载时的 key | string |
| volume  | 音量，默认值为1 | number |
| loop | 是否循环播放，默认值为 false | boolean |

## API
```js
// 添加音频并设置50%的音量
let audio = game.add.audio('audio',0.5)

audio.play(); //播放
audio.pause(); //暂停
audio.resume(); //恢复
audio.stop(); //停止
```

## 示例
```js
preload () {
  game.load.audio('audio','./music/audio.ogg')
}

create () {
  this.audio = game.add.audio('audio')
  // 或者
  // this.audio = game.add.sound('audio')

  // 播放音频
  this.audio.play()

  // .................
}

shutdown () {
  // 销毁音频
  this.audio.destroy();
  this.audio = null;
}
```


[[toc]]