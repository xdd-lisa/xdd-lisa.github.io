import routes from './src/pages/routes';
import { defineConfig } from 'umi';

export default defineConfig({
  routes: routes,
  alias: {
    '@': '/src/',
    '@page': '/src/pages',
  },
  hash: true,
  theme: { '@primary-color': '#1DA57A' },
  // 只设置 dev 阶段的 sourcemap
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
});