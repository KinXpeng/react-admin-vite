import { lazy } from 'react'
export const personal = [
	{
		path: '/personalStatus', // 状态
		name: 'personalStatus',
		component: lazy(() => import('@/pages/personalStatus/index'))
	}
]
