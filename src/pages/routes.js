export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', component: './home' },
      { exact: true, path: '/docs', component: './docs' },
    ],
  },
];