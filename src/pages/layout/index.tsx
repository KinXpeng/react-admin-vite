import React, { useState, Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import { Layout, Drawer } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import SiderMenu from './sider/index'
import HeaderNav from './header/index'
import logoMini from '@/assets/imgs/frame/logo_mini.png'
const { Header, Content, Sider } = Layout

function LayoutConfig() {
	const { configStore } = useStore()
	const navigate = useNavigate() // 路由跳转
	const [collapsed, setCollapsed] = useState(false) // 菜单栏收起状态
	const [visible, setVisible] = useState(false) // Drawer状态
	const [width, setWidth] = useState(window.innerWidth) // 窗口宽度
	const toggle = () => {
		if (width > 650) setCollapsed(!collapsed)
		setVisible(true)
	}

	// 关闭drawer
	const onClose = () => {
		setVisible(false)
	}

	// 返回首页
	const backHome = () => {
		configStore.crumbItem()
		navigate('/', { replace: true })
	}

	// 获取窗口宽度
	window.onresize = () => {
		setWidth(window.innerWidth)
	}
	useEffect(() => {
		width < 650 ? setCollapsed(true) : setCollapsed(false)
	}, [width])

	return (
		<Layout className="h-full select-none">
			{/* 侧边栏适配移动端 */}
			{width < 650 ? (
				<Drawer
					placement="left"
					width="80%"
					visible={visible}
					onClose={onClose}
					closable={false}
					bodyStyle={{ padding: 0 }}
				>
					<Sider
						collapsedWidth={0}
						theme={configStore.themeStyle}
						trigger={null}
						className="cs-aside !w-full h-full !max-w-none"
					>
						<SiderMenu setVisible={setVisible} />
					</Sider>
				</Drawer>
			) : (
				<Sider
					width="230"
					theme={configStore.themeStyle}
					trigger={null}
					collapsible
					collapsed={collapsed}
					className="cs-aside"
				>
					<SiderMenu collapsed={collapsed} />
				</Sider>
			)}
			<Layout>
				<Header className="flex items-center !bg-white shadow-box !p-0">
					{width < 650 ? (
						<span className="w-24 h-full text-center cursor-pointer px-5 py-2" onClick={backHome}>
							<img className="w-full h-full" src={logoMini} alt="" />
						</span>
					) : (
						''
					)}
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className:
							'!flex items-center h-full py-0 px-6 cursor-pointer transition-color duration-300 text-gray-500 mr-2.5 text-base hover:bg-gray-100',
						onClick: toggle
					})}
					<HeaderNav width={width} />
				</Header>
				<Content
					style={{
						margin: width < 650 ? 4 : 10,
						minHeight: 280,
						overflow: 'auto',
						position: 'relative'
					}}
				>
					<Suspense>
						<Outlet />
					</Suspense>
				</Content>
			</Layout>
		</Layout>
	)
}

export default observer(LayoutConfig)
