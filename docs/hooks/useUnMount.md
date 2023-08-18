---
title: useUnMount
order: 3
---

# useMount

在组件卸载阶段执行。

## 使用示例

### 基本用法

```tsx
import { message } from 'antd';
import React, { useCallback, useState } from 'react';
import useUnMount from '../../src/hooks/useUnMount';

const MountComponent = () => {
  useUnMount(() => {
    message.error('卸载阶段被执行了');
  });
  return <div>组件挂载了</div>;
};

export default () => {
  const [isMount, setIsMount] = useState(false);

  const handleClick = useCallback(() => {
    setIsMount((v) => !isMount);
  }, [isMount]);

  return (
    <div>
      <button onClick={handleClick}>
        点击{isMount ? '卸载' : '挂载'} mount 组件
      </button>
      {isMount && <MountComponent />}
    </div>
  );
};
```

## API

```ts
useUnMount(fn: () => void );
```

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | ummount 时执行的函数 | `() => void` | -      |
