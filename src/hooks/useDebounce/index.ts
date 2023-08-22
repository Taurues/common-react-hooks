/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2023-08-21 15:49:45
 * @LastEditors: Andy
 * @LastEditTime: 2023-08-21 18:06:09
 */
/*
 * @Descripttion: 防抖hooks
 * @version: 1.0.0
 * @Author: sakelog
 * @Date: 2023-08-21 15:49:45
 * @LastEditors: Andy
 * @LastEditTime: 2023-08-21 17:54:04
 */
import { useCallback, useEffect, useRef } from 'react';

/**
 * callback: 需要执行的函数
 * time：间隔时间
 * immediate：是否立即执行，默认false---- immediate: boolean = false,
 * （1）立即执行：开始先执行一次，如果在后面的time时间内再次触发则不执行，一直到time时间后裁执行
 * （2）非立即执行： 一开始不执行，如果在time时间内重复触发则不执行，直到间隔time后才触发
 */
const useDebounce = (callback: () => void, waitTime: number, dep = []) => {
  const { current } = useRef({ callback, timer: null });
  useEffect(
    function () {
      current.callback = callback; //useRef返回的 ref 对象在组件的整个生命周期内持续存在
    },
    [callback],
  );

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.callback(...args);
    }, waitTime);
  }, dep);
};

export default useDebounce;
