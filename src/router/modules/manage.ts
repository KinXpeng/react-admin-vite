import { lazy } from 'react'
export const manage = [
	{
		path: '/analysisPanel', // 分析页
		name: 'analysisPanel',
		label: 'aside.panel.analysis_panel',
		component: lazy(() => import('@/pages/panelManage/analysisPanel/index'))
	}
]
