# 文本

## 居中
style里面设置`align:"center"​`即可

## 阴影
```js
text.setShadow(x,y,color,blur);
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| x      | 阴影 X 位置 | number |
| y      | 阴影 Y 位置 |   number |
| color      | 文本的颜色      |   string |
| blur      | 文本的阴影颜色      |   string |

## 定位
```js
text.setTextBounds(x,y,w,h);
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| x      | 相对于画布的 X 坐标 | number |
| y      | 相对于画布的 Y 坐标 |   number |
| w      | 文本的宽度      |   number |
| h      | 文本的高度      |   number |

## 对齐
```js
text​.anchor.x = 0;
text​.anchor.y = 0;
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| x      | x 方向上，0、0.5、1分别对应靠右、中间、靠左对齐​ | number |
| y      | y 方向上，​0、0.5、1分别对应靠上、中间、靠下对齐 |   number |

## 位图字体
```js
// 预加载
game.load.bitmapFont(key, img, xml);
// 添加进场景
game.add.bitmapText(x, y, key, text, size);
```
#### 参数
#### bitmapFont
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| key      | 定义位图字体的 key | string |
| img      | 位图字体的图片 |   string |
| xml      | 位图的xml文件 | string |
#### bitmapText
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| x      | x指坐标 | number |
| y      | y指坐标 |   number |
| key      | 字体文件的key | string |
| text   | 需渲染的文本 | string |
| size | 字体大小 | number |

## 自动换行
```js
style = { 
  font: 'bold 60pt Arial', 
  fill: 'white', 
  align: 'left',
  wordWrap: true, 
  wordWrapWidth: 450 
};​
```
#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| font      | 文本样式 | string |
| fill   | 填充颜色 | string |
| align | 水平对齐.可取：left、center、right | string |
| wordWrap | 是否换行 | boolean | 
| wordWrapWidth | 换行边界值 | number |



[[toc]]