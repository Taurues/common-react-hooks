---
group:
  title: dom相关hooks
order: 2
---

# useWindowSize

获取浏览器窗口大小

## 使用示例

### 基本用法

```tsx
import useWindowSize from '../../src/hooks/useWindowSize';

export default () => {
  const windowSize = useWindowSize();
  return (
    <div>
      <ul>
        <li>window.innerHeight: {windowSize.innerHeight}</li>
        <li>window.innerWidth: {windowSize.innerWidth}</li>
        <li>window.outerHeight: {windowSize.outerHeight}</li>
        <li>window.outerWidth: {windowSize.outerWidth}</li>
      </ul>
    </div>
  );
};
```

## API

```ts
const windowSize = useWindowSize();
```

### windowSize 内部元素

| 参数        | 说明                                                                                     | 属性值 |
| ----------- | ---------------------------------------------------------------------------------------- | ------ |
| innerHeight | 返回浏览器窗口的视口（viewport）高度（以像素为单位）；如果有水平滚动条，也包括滚动条高度 | 只读   |
| innerWidth  | 返回以像素为单位的窗口的内部宽度。如果垂直滚动条存在，则这个属性将包括它的宽度           | 只读   |
| outerHeigth | 返回整个浏览器窗口的高度（以像素为单位），包括侧边栏（如果存在）、窗口镶边和窗口调正边框 | 只读   |
| outerWidth  | 返回整个浏览器窗口的宽度，包括侧边栏（如果存在）、窗口镶边和调正窗口大小的边框           | 只读   |
