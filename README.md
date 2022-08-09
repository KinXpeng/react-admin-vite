<h1 align="center">React-admin-vite</h1>

<div align="center">

A simple template of react.

[![OSCS Status](https://www.oscs1024.com/platform/badge/KinXpeng/react-admin-vite.svg?size=small)](https://www.oscs1024.com/project/KinXpeng/react-admin-vite?ref=badge_small)

</div>

## Project introduction

- 项目是基于 `vite` 搭建的后台管理系统（react18 版本），所有页面及功能采用函数式组件及 hooks 实现。
- 项目预览：https://temp.cins.cc
- 所用技术/UI 框架
  - React Hooks
  - 路由（v6 版本）：`react-router-dom`
  - 全局状态管理：`mobx` `mobx-react-lite`
  - 配置了强大的 CSS 工具：`tailwindcss`
  - UI 框架：`antd`
  - 国际化：`i18next` `react-i18next`
  - Ajax 数据请求：`axios`
- 功能实现：（界面设计参照了 antd-pro 的风格）

  - 界面适配：支持 PC 端和==移动端==的响应式布局。
  - 界面风格切换：暗色风格和亮色风格两种。
  - 主题色切换：antd-pro 的 8 种主题色。
  - 国际化：使用 `i18n` 实现国际化，当前支持中英文两种语言的切换。
  - 配置式路由：基于`react-router-dom`实现了和`vue`类似的单独可配置的 router，进行统一的管理。
  - 路由鉴权：封装 Auth 高阶组件，实现登录拦截。
  - axios 封装：基于`axios`统一处理，实现请求以及响应拦截，全局接口统一管理。
  - token 持久化：封装工具函数使用本地储存实现 token 持久化。
  - mobx 状态管理：以`mobx-react-lite` 作为链接包，实现数据响应式；按功能拆分 store，实现 mobx 的模块化。

## Usage

- 菜单配置

  - 新建一级菜单可写在 `router/modules` 里，需要在 `routes.ts` 中引入。
  - 在已有的一级菜单下建二级菜单可直接在 `modules` 中找到对应的文件。
  - 新建页面位于 `pages` 中，尽量使目录和路由的结构保持一致。
  - 菜单的添加位于 `components/menus/index.ts` 中，可参照示例进行配置。

- 多语言配置

  - 多语言文件位于 `i18n/localels` 目录下，目前支持中英两种语言。

  - 菜单label的使用方法参照已有的菜单配置。

  - 页面中多语言的配置可参考已有页面（例：使用t('home')函数）。

    ```js
    import { useTranslation } from 'react-i18next'
    
    function test(){
      const { t } = useTranslation() // 国际化 （使用时需在组件中使用，否则会报错）
    }
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3003](http://localhost:3003) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
