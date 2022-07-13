import { lazy } from 'react';
export const diary = [
  {
    path: '/diaryList', // 日记列表
    name: 'diaryList',
    component: lazy(() => import('@/pages/diaryManage/homePage')),
  },
  {
    path: '/journeyTake', // 日记列表 JourneyTake
    name: 'journeyTake',
    component: lazy(() => import('@/pages/diaryManage/journeyTake')),
  },
];
