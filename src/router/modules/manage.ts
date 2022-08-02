import { lazy } from 'react'
export const manage = [
	{
		path: '/analysisPanel', // 分析页
		name: 'analysisPanel',
		component: lazy(() => import('@/pages/panelManage/analysisPanel/index'))
	}
]
