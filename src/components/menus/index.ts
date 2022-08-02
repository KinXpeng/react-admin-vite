import { MenuItem } from './index.d'
import { AppstoreOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'
// 菜单管理
export const menus: Array<MenuItem> = [
	// 面板管理
	{
		key: 'panel',
		label: 'aside.panel.nav',
		icon: AppstoreOutlined,
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
