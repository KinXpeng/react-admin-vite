import { lazy } from 'react'
import { manage } from './modules/manage' // 面板管理
import { diary } from './modules/diary' // 日记管理
import { moment } from './modules/moment' // 我的状态

interface router {
	path: string
	name: string
	component: any
	children?: Array<router>
}

const routes: Array<router> = [
	{
		path: '/login',
		name: 'login',
		component: lazy(() => import('@/pages/login/index'))
	},
	{
		path: '/',
		name: 'layout',
		component: lazy(() => import('@/pages/layout/index')),
		children: [
			{
				path: '/',
				name: 'home',
				component: lazy(() => import('@/pages/home/index'))
			},
			...manage,
			...diary,
			...moment
		]
	}
]

export default routes
