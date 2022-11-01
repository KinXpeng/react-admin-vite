import { lazy } from 'react'
export const personal = [
	{
		path: '/personalStatus', // 状态
		name: 'personalStatus',
		label: 'aside.personal.personal_status',
		component: lazy(() => import('@/pages/personalStatus/index'))
	}
]
