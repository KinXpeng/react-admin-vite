import { lazy } from 'react';
export const moment = [
  {
    path: '/momentStatus', // 状态
    name: 'momentStatus',
    component: lazy(() => import('@/pages/momentStatus/index')),
  },
];
