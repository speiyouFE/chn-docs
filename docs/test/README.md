<TOC/>

# 基础
## 基础
### 基础用法
:::demo 基本使用方法
```html{3,4}
<template>
  <div>
    <Badge text="beta" type="warn"></Badge>
    <Badge text="0.10.1+"></Badge>
  </div>
</template>
```
:::

<badge>ada</badge>
<badge type="danger" text="你好">ada</badge>
<badge type="warning" styles="background:#dc0000">你好</badge>
<badge type="success">![An image](~@imgs/1.png)</badge>


::: tip
tip
:::

::: warning
asds
:::

::: success
asds
:::

:::danger
asds
:::

{{this.$page}}

::: v-pre
`{{ This will be displayed as-is }}`
:::
### 基础用法
:::demo 基本使用方法
```html{3,4}
<template>
  <div>
    <Badge text="beta" type="warn"></Badge>
    <Badge text="0.10.1+"></Badge>
  </div>
</template>
```
:::

<img src="~@imgs/1.png" alt="foo">

:::tip
asds
:::

:::warning
asds
:::

:::success
asds
:::

:::danger
asds
:::

{{this.$page}}

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