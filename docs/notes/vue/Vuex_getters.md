---
title: vuex 中的getters使用方法
date: 2021-09-8
categories:
 - 前端
tags:
 - vue
---

### 什么是getters?
getters其实就是store的计算属性，对state里面的状态进行过滤处理，用法与组件自身的计算属性一模一样。

### 如何使用getters？
在store文件下的index.js中设置</br>
可以动态导出state中的变量

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo:{
		    permission_list：'a,b'
		} 
	},
	mutations: {

	},
	getters: {
		permissionArr(state){
			return state.userInfo.permission_list
		}
	},
	actions: {
		
	}
})

export default store

```
### 在js文件中使用

```
import Vue from 'vue'
import store from '../store/index.js'

let listArr = store.getters.permissionArr.split(',')
```