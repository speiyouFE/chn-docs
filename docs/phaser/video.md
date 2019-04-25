# 视频

## 加载资源
```js
game.load.video(key,url)
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| key      | 自定义视频的变量名，在后面代码中可直接引用 | string |
| url  | 音频的路径 | string |

## 添加进场景
```js
game.add.video(key)
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| key      | 预加载时的 key | string |

## 示例
```js
preload () {
  game.load.audio('video','./music/video.mp4')
}

create () {
  // 定义一个组用来放视频
  this.advVideoGroup = this.game.add.group();
  // 添加视频
  this.advVideo = this.game.add.video('video');
  // 设置视频的宽高
  this.advVideo.width = 100
  // 设置视频在场景中的位置
  this.advVideoSprite = this.advVideoGroup.create(this.game.world.width/2, this.game.world.height/2, this.advVideo);
  // 设置视频对齐
  this.advVideoSprite.anchor.set(0.5);
  // 设置视频缩放
  this.advVideoSprite.scale.set(1.5)
  // 设置视频透明度
  this.advVideoSprite.alpha = 0
  // 播放视频
  this.advVideo.play(true);
}


// .................

shutdown () {
  // 销毁视频
  this.advVideo.destroy();
  this.advVideo = null;
}
```


[[toc]]