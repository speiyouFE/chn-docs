# 图形

## 带圆角的矩形
```js
drawRoundedRect(x, y, width, height, radius)
```
#### 参数
| 参数      | 说明          | 类型      |
|---------- |-------------- |---------- |
| x | 矩形的x坐标 | Number | | 
| y | 矩形的y坐标 | Number |
| width | 矩形的宽 | Number |
| height | 矩形的宽 | Number |
| radius | 矩形角的半径。在WebGL这必须在0和9之间的值 | Number |

## 椭圆
```js
drawEllipse(x, y, width, height) 
```
#### 参数
| 参数      | 说明          | 类型      |
|---------- |-------------- |---------- |
| x | 椭圆的x坐标 | Number |
| y | 椭圆的y坐标 | Number |
| width | 椭圆的宽 | Number |
| height | 椭圆的宽 | Number |

## 矩形
```js
drawRect(x, y, width, height)
```
#### 参数
| 参数      | 说明          | 类型      |
|---------- |-------------- |---------- |
| x | 矩形的x坐标 | Number |
| y | 矩形的y坐标 | Number |
| width | 矩形的宽 | Number |
| height | 矩形的宽 | Number |

## Graphics
- 填充
```js
graphics.beginFill(color, alpha)
grpahics.endFill();
```
- 描边
```js
graphics.lineStyle(lineWidth, color, alpha)
```

- 直线线条
```js
moveTo, lineTo
```

- 清除图形
```js
graphics.clear()
```

## 示例
```js
let voiceBg = game.add.graphics(0, 0)
voiceBg.clear()
voiceBg.anchor.setTo(0)
voiceBg.beginFill('#dc0000') // 填充颜色
voiceBg.lineStyle(2, 0xfdd228, 1) // 边框
voiceBg.alpha = 0.6 // 透明度
voiceBg.drawRoundedRect(160, 120, voiceTxt.width + 110, 60, 100) // 画图
voiceBg.endFill() // 结束填充
```


[[toc]]