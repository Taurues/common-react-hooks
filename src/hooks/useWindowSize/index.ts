/*
 * @Descripttion: 获取浏览器窗口大小的hooks
 * @version:
 * @Author: zhangyanru
 * @Date: 2023-08-21 10:23:51
 * @LastEditors: Andy
 * @LastEditTime: 2023-08-21 10:35:51
 */
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const getWindowSize = () => ({
    innerHeight: window.innerHeight, // 浏览器可视窗口的大小，相当于document.clientHeight
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight, // 从你的浏览器上沿到下沿，包含菜单栏、工具栏等
    outerWidth: window.outerWidth,
  });
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleSize = () => {
    setWindowSize(getWindowSize());
  };

  useEffect(() => {
    window.addEventListener('size', handleSize);
    return () => {
      window.addEventListener('size', handleSize);
    };
  });

  return windowSize;
};

export default useWindowSize;
