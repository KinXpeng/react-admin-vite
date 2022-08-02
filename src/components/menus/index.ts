interface Item {
	key: string
	path?: string
	icon?: any
	label: string
}

interface MenuItem extends Item {
	children?: Array<Item>
}

// 菜单管理
export const menus: Array<MenuItem> = [
	{
		key: 'panel',
		label: 'aside.panel.nav',
		children: [
			{
				path: '/analysisPanel',
				key: 'analysisPanel',
				label: 'aside.panel.analysis_panel'
			}
		]
	},
	{
		key: 'list',
		label: 'aside.list.nav',
		children: [
			{
				path: '/userList',
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
	{
		key: 'personal',
		label: 'aside.personal.nav',
		children: [
			{
				path: '/personalStatus',
				key: 'personalStatus',
				label: 'aside.personal.personal_status'
			}
		]
	}
]
