import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: './docs-dist',
  themeConfig: {
    name: 'my-hooks',
  },
  history: {
    type: 'hash',
  },
  base: '/common-react-hooks/',
  publicPath: '/common-react-hooks/',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
