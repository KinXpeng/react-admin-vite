import { lazy } from 'react';
export const manage = [
  {
    path: '/analysisPanel', // 分析页
    name: 'analysisPanel',
    component: lazy(() => import('@/pages/panelManage/analysisPanel/index')),
  },
  {
    path: '/userList', // 用户列表
    name: 'userList',
    component: lazy(() => import('@/pages/panelManage/userList/index')),
  },
];
