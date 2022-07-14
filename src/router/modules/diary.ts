import { lazy } from 'react'
export const diary = [
	{
		path: '/diaryList', // 日记列表
		name: 'diaryList',
		component: lazy(() => import('@/pages/diaryManage/homePage'))
	},
	{
		path: '/diaryRecords', // 日记记录
		name: 'diaryRecords',
		component: lazy(() => import('@/pages/diaryManage/diaryRecords'))
	}
]
