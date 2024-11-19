---
nav:
  title: 组件
  path: /components

group:
  title: 基础
---

## 按钮

按钮分类:
默认按钮: 用于没有主次之分的一组行动点。

基础按钮: 用于主行动点，一个操作区域只能有一个主按钮。

危险按钮: 删除/移动/修改权限等危险操作。

警告按钮: 未知危险操作。

信息按钮: 一般用于提示。

文本按钮: 用于最次级的行动点。

链接按钮: 一般用于链接，即导航至某位置。

虚线按钮: 常用于添加操作。

以及 1 种状态属性与上面配合使用。

禁用：行动点不可用的时候，一般需要文案解释。

## 基础按钮

按钮分为 primary - 主要按钮、secondary - 次要按钮（默认）、dashed - 虚线按钮、outline - 线形按钮、text - 文本按钮五种类型

```tsx
import React from 'react';
import { Button, ConfigProvider } from 'aurora-components';

export default () => <Button>默认按钮</Button>;
```
