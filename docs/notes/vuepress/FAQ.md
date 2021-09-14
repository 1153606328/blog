---
title: VuePress开发过程遇到的坑
date: 2020-09-3
publish: false
---
### 1、在vuepress 中使用vue组件，预编译样式less/sass 报错
高版本的less/sass 不兼容vuepress...<br/>
解决方案:使用低版本编译器 node-sass@4.14.1，sass-loader@7.3.1
### 2、在config.js中配置插件无效
可能原因：plugins写在了themeConfig里面<br/>
解决方案：将plugins放在与themeConfig同级的位置，先安装再配置