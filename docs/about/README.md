[[toc]]

# 一级标题
这是测试文案
[![Build Status](https://travis-ci.org/fedguide/docs.svg?branch=master)](https://travis-ci.org/fedguide/docs)

`js code`

## 二级标题
测试的文案
<a href="/test/">测试的<icon name="sealui-icon-layers"></icon></a>
[Home](/) 
[test](/test/)

```js
class Dialog extends Component {
  render () {
    return (
      <View className='dialog'>
        <View className='header'>Welcome!</View>
        <View className='body'>
          {this.props.children}
        </View>
        <View className='footer'>-- divider --</View>
      </View>
    )
  }
}
```
### 三级标题
:::demo 基本使用方法
```html
<template>
  <div>
    <Badge text="beta" type="warn"></Badge>
    <Badge text="0.10.1+"></Badge>
  </div>
</template>
```
:::

<badge>默认</badge>
<badge type="warning">warning</badge>
<badge type="warning" styles="background:#dc0000">自定义背景</badge>

<badge type="success">![An image](@imgs/1.png)</badge>
<badge type="danger">![An image](@imgs/1.png)</badge>

:::tip
tip
:::

:::warning
asds
:::

:::success 成功提示
asds
:::

:::danger
asds
:::

{{this.$page}}

:::v-pre
`{{ This will be displayed as-is }}`
:::

::: v-pre
`{{ This will be displayed as-is }}`
:::

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
