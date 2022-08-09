import { MenuItem } from './index.d'
import { AppstoreOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'
// 菜单管理
export const menus: Array<MenuItem> = [
	// 面板管理
	{
		key: 'panel', // 一级菜单key
		label: 'aside.panel.nav', // 菜单名称（多语言配置参考i18n/locales中的文件）
		icon: AppstoreOutlined, // 菜单图标（图标样式参考antd官网）
		children: [
			{
				path: '/analysisPanel', // 分析面板
				key: 'analysisPanel',
				label: 'aside.panel.analysis_panel'
			}
		]
	},
	// 列表管理
	{
		key: 'list',
		label: 'aside.list.nav',
		icon: UnorderedListOutlined,
		children: [
			{
				path: '/userList', // 用户列表
				key: 'userList',
				label: 'aside.list.user_list'
			},
			{
				path: '/diaryList',
				key: 'diaryList',
				label: 'aside.list.diary_list'
			},
			{
				path: '/diaryRecords',
				key: 'diaryRecords',
				label: 'aside.list.diary_records'
			}
		]
	},
	// 个人中心
	{
		key: 'personal',
		label: 'aside.personal.nav',
		icon: UserOutlined,
		children: [
			{
				path: '/personalStatus', // 我的状态
				key: 'personalStatus',
				label: 'aside.personal.personal_status'
			}
		]
	}
]
