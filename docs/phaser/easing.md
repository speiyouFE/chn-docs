# 补间动画

## 使用方法
通过`game.add`的`tween`方法得到一个`Tween`对象,这个方法的参数是需要进行补间动画的物体
```js
let alphaTween = game.add.tween(`group`).to(
  properties,  // 进行动画的属性
  duration,  // 持续的时间
  ease,  // 缓动函数
  autoStart, // 是否自动开始
  delay, // 延迟时间
  repeat, // 重复的次数
  yoyo // 是否需要自动反转
)
```

#### 参数
| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| properties      | 一个js对象，里面包含着需要进行动画的属性，如 {y:120} | object |
| duration  | 补间动画持续的时间，单位为毫秒 | number |
| ease  | 缓动函数，默认为匀速动画 | - |
| autoStart  | 是否自动开始 | boolean |
| delay  | 动画开始前的延迟时间，单位为毫秒 | number |
| repeat  | 动画重复的次数，如果需要动画永远循环，则把该值设为 Number.MAX_VALUE | number |
| yoyo | 如果该值为true,则动画会自动反转  默认 false | boolean |


## 缓动函数

#### Phaser中内置了十一种缓动函数
```js
// 线性
Phaser.Easing.Linear
// 二次次
Phaser.Easing.Quadratic
// 三次方。创建使用公式image 加速和/或减速的动画。与圆缓冲类似，但是是基于立方体函数的时间来产生一个一开始加速度较慢然后越来越快的动画。
Phaser.Easing.Cubic 
// 四次方
Phaser.Easing.Quartic 
// 五次方
Phaser.Easing.Quintic 
// 正弦
Phaser.Easing.Sinusoidal 
// 指数
Phaser.Easing.Exponential 
// 圆形。创建使用循环函数加速和/或减速的动画。 基于三角函数（圆函数）来加速动画，一开始的加速度比较慢，越往后加速度越快。
Phaser.Easing.Circular 
// 弹性
Phaser.Easing.Elastic 
// 倒退。让动画在继续之前往后退一点。这有点象在斜坡上启动汽车，会往后倒退一点然后才前进。
Phaser.Easing.Back 
// 反弹。有弹回效果的动画，类似篮球落下，弹起，再落下，即弹跳反冲。
Phaser.Easing.Bounce
```

## 示例
```js
//对这个组添加一个tween动画，让它不停的上下移动
game.add.tween(titleGroup).to({ 
  y:120
},1000,null,true,0,Number.MAX_VALUE,true);

// 2秒改变透明度
game.add.tween(titleGroup).to({ 
  alpha:1
},2000, window.Phaser.Easing.Linear.none, true);

// 2秒内改变大小, 延迟3秒执行
game.add.tween(titleGroup.scale).to({ 
  x: 100,
  y: 100
},2000, window.Phaser.Easing.Linear.none, true, 3)
```

[[toc]]