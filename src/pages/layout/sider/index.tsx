import { useEffect, useState } from 'react'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { PicRightOutlined, TableOutlined, SmileOutlined } from '@ant-design/icons'
import { menus } from '@/components/menus/index'

interface IHeaderProps {
	collapsed?: boolean
	setVisible?: any
}

function SiderMenu({ collapsed, setVisible }: IHeaderProps) {
	const { configStore } = useStore()
	const { t } = useTranslation()
	const navigate = useNavigate() // 路由跳转
	const location = useLocation()
	const [menuList, setMenuList] = useState([
		// 菜单列表
		{
			key: 'panel',
			icon: <PicRightOutlined />,
			label: t('aside.panel.nav'),
			children: [
				{
					path: '/analysisPanel',
					key: 'analysisPanel',
					label: t('aside.panel.analysis_panel'),
					onClick: () => navigate('/analysisPanel')
				}
			]
		},
		{
			key: 'list',
			icon: <TableOutlined />,
			label: t('aside.list.nav'),
			children: [
				{
					path: '/userList',
					key: 'userList',
					label: t('aside.list.user_list'),
					onClick: () => navigate('/userList')
				},
				{
					path: '/diaryList',
					key: 'diaryList',
					label: t('aside.list.diary_list'),
					onClick: () => navigate('/diaryList')
				},
				{
					path: '/diaryRecords',
					key: 'diaryRecords',
					label: t('aside.list.diary_records'),
					onClick: () => navigate('/diaryRecords')
				}
			]
		},
		{
			key: 'personal',
			icon: <SmileOutlined />,
			label: t('aside.personal.nav'),
			children: [
				{
					path: '/personalStatus',
					key: 'personalStatus',
					label: t('aside.personal.personal_status'),
					onClick: () => navigate('/personalStatus')
				}
			]
		}
	])

	// menus.forEach((ele)=>{
	// 	let objItem = {
	// 		key:ele.key,
	// 		label:t(ele.label),
	// 		children:ele.children?.map((item:any)=>{
	// 			return {
	// 				path:item.path,
	// 				key:item.key,
	// 				label:t(item.label),
	// 				onClick:()=>navigate(item.path)
	// 			}
	// 		})
	// 	};
	// 	setMenuList([...menuList,objItem])
	// })

	// 解决刷新页面面包屑导航消失的问题
	useEffect(() => {
		let activeNode = JSON.parse(localStorage.getItem('activeItem') || '{}')
		let parentNode = JSON.parse(localStorage.getItem('parentItem') || '{}')
		if (parentNode) parentNode = menuList.find((item) => item.key === parentNode.key)
		menuList.forEach((ele) => {
			let result = ele.children.find((item) => item.path === location.pathname)
			if (result) {
				activeNode = result
			}
		})
		if (activeNode?.label !== undefined && activeNode?.label !== null && location.pathname !== '/') {
			configStore.switchMenuItem(activeNode)
			configStore.operateCrumbMenu(parentNode)
		}
	}, [configStore, location.pathname, menuList])

	// 返回首页
	const backHome = () => {
		configStore.crumbItem()
		navigate('/', { replace: true })
	}

	// 点击菜单
	const handleClickItem: MenuProps['onClick'] = (item) => {
		let parentNode = item.keyPath[1]
		let result = menuList.find((ele) => ele.key === parentNode)
		let activeNode = result?.children.find((ele) => ele.key === item.key)
		configStore.operateCrumbMenu(result)
		configStore.switchMenuItem(activeNode)
		if (setVisible !== undefined) setVisible(false) // 收起drawer菜单
	}

	return (
		<>
			<div className="h-16 text-center text-6xl italic cursor-pointer text-blue-400 overflow-hidden" onClick={backHome}>
				{collapsed ? 'C' : 'CINS'}
			</div>
			<Menu
				theme={configStore.themeStyle}
				mode="inline"
				selectedKeys={[configStore.activeItem.key]}
				onClick={handleClickItem}
				items={menuList}
			></Menu>
		</>
	)
}

export default observer(SiderMenu)
