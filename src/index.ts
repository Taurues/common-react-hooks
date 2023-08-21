export {
  default as useMount,
  default as useUnMount,
  default as useWindowSize,
} from './hooks';

/**
 * 上面这种写法等同于
 * import useMount from './hooks'
 * import useUnMount from './hooks'
 * export default { useMount, useUnMount }
 */
