---
nav:
  title: 组件
  path: /components

group:
  title: 基础
---

## 全局配置

使用全部配置 useContext 特性，可更改主题颜色

## 基本使用

```tsx pure
import React from 'react';
import { ConfigProvider } from 'aurora-components';

export default () => (
  <ConfigProvider locale={'zh-CN'}>{<App />}</ConfigProvider>
);
```
