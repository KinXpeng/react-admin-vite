import { lazy } from 'react';

interface router {
  path: string;
  name: string;
  component: any;
  children?: Array<router>;
}

const routes: Array<router> = [
  {
    path: '/login',
    name: 'login',
    component: lazy(() => import('@/pages/login/index')),
  },
  {
    path: '/',
    name: 'layout',
    component: lazy(() => import('@/pages/layout/index')),
  },
];

export default routes;
