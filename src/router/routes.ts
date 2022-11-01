import { lazy } from 'react'
import { manage } from './modules/manage' // 面板管理
import { list } from './modules/list' // 日记管理
import { personal } from './modules/personal' // 我的状态
import { MenuItem, Item } from './index.d'
import { AppstoreOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'

interface router {
	path: string
	name: string
	component: any
	children?: Array<router>
}

// 菜单项配置
export const menus: Array<MenuItem> = [
	{
		key: 'panel', // 一级菜单key
		label: 'aside.panel.nav', // 菜单名称（多语言配置参考i18n/locales中的文件）
		icon: AppstoreOutlined, // 菜单图标（图标样式参考antd官网）
		children: manage
	},
	{
		key: 'list',
		label: 'aside.list.nav',
		icon: UnorderedListOutlined,
		children: list
	},
	{
		key: 'personal',
		label: 'aside.personal.nav',
		icon: UserOutlined,
		children: personal
	}
]

const childRoutes: Array<Item> = []
menus.forEach((ele) => {
	ele.children?.forEach((item) => {
		item.key = item.name
	})
	childRoutes.push(...(ele as any).children)
})

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
			...(childRoutes as any)
		]
	},
	{
		path: '*',
		name: '404',
		component: lazy(() => import('@/pages/404/index'))
	}
]

export default routes
