import { defineConfig } from 'dumi';

const url = '/common-react-hooks/';

export default defineConfig({
  outputPath: './docs-dist',
  themeConfig: {
    name: 'sake-hooks',
  },
  history: {
    type: 'hash',
  },
  base: process.env.NODE_ENV === 'production' ? url : '/',
  publicPath: process.env.NODE_ENV === 'production' ? url : '/',
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
