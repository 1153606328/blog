---
title: vue 自定义指令
date: 2021-09-8
categories:
 - 前端
tags:
 - vue
---

### 全局注册自定义的指令
通过 Vue.directive( id, [definition] ) 方式注册全局指令。然后在入口文件中进行 Vue.use() 调用。
1. 批量注册指令，新建 directives/index.js 文件
```js
import permission from './permission'

// 自定义指令
const directives = {
  permission,
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}
```
2. 新建permission.js文件
```js
import Vue from 'vue'
import store from '../store/index.js'

let listArr = store.getters.permissionArr.split(',')
function checkArray(key) {
  let arr = listArr
  let index = arr.indexOf(key)
  if (index > -1) {
    return true // 有权限
  } else {
    return false // 无权限
  }
}

const permission = {
  inserted: function (el, binding) {
    let permission = binding.value // 获取到 v-permission的值

    if (permission) {
      let hasPermission = checkArray(permission)
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  },
}

export default permission
```
3. 在 main.js 引入并调用
```js
import Vue from 'vue'
import Directives from './common/directives'//注意路径
Vue.use(Directives)
```
### 在vue中使用指令
```vue
<div class="btns">
  <!-- 显示 -->
  <button v-permission="'1'">权限按钮1</button>
  <!-- 不显示 -->
  <button v-permission="'10'">权限按钮2</button>
</div>
```