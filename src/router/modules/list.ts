import { lazy } from 'react'
export const list = [
	{
		path: '/userList', // 用户列表
		name: 'userList',
		component: lazy(() => import('@/pages/listManage/userList/index'))
	},
	{
		path: '/diaryList', // 日记列表
		name: 'diaryList',
		component: lazy(() => import('@/pages/listManage/homePage'))
	},
	{
		path: '/diaryRecords', // 日记记录
		name: 'diaryRecords',
		component: lazy(() => import('@/pages/listManage/diaryRecords'))
	}
]
