import { lazy } from 'react'
export const list = [
	{
		path: '/userList', // 用户列表
		name: 'userList',
		key: 'userList',
		label: 'aside.list.user_list',
		component: lazy(() => import('@/pages/listManage/userList'))
	},
	{
		path: '/diaryList', // 日记列表
		name: 'diaryList',
		key: 'diaryList',
		label: 'aside.list.diary_list',
		component: lazy(() => import('@/pages/listManage/diaryList'))
	},
	{
		path: '/diaryRecords', // 日记记录
		name: 'diaryRecords',
		key: 'diaryRecords',
		label: 'aside.list.diary_records',
		component: lazy(() => import('@/pages/listManage/diaryRecords'))
	}
]
