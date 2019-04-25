# 图片

## 加载资源
```js
game.load.image(key, url)
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| key      | 自定义图片的变量名，在后面代码中可直接引用 | string |
| url  | 图片路径 | string |

## 添加进场景
```js
game.add.image(x, y, key)
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| x      | x指坐标 | number |
| y      | y指坐标 |   number |
| key      | 预加载时的 key | string |

## 示例
```js
preload () {
  // 预加载图片
  game.load.image('imgUrl', './img/img.png')
} 

create () {
  // 创建一个组
  let group = game.add.group()
  // 添加图片
  let studentPortrait = this.game.add.image(0, 0, 'imgUrl')
  // 设置图片位置
  studentPortrait.anchor.set(0.5)
  // 设置图片宽高
  studentPortrait.width = 100
  studentPortrait.height = 100
  // 将处理好的图片添加进组
  this.group.add(studentPortrait)

  // ..........
}

```


[[toc]]