/*
 * @Descripttion: 获取浏览器窗口大小的hooks
 * @version:
 * @Author: zhangyanru
 * @Date: 2023-08-21 10:23:51
 * @LastEditors: Andy
 * @LastEditTime: 2023-08-21 15:47:39
 */
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
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
