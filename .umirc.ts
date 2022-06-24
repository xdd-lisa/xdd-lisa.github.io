import routes from './src/pages/routes';

export default {
  npmClient: 'npm',
  alias: {
    '@': '/src/',
    '@page': '/src/pages',
  },
  hash: true,
  routes: routes,
};
