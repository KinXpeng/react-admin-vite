import { useState, useEffect } from 'react'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import { Breadcrumb, Menu, Dropdown, Tooltip, Drawer, Avatar } from 'antd'
import { GlobalOutlined, SettingOutlined, CheckOutlined, ImportOutlined, GithubFilled } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import dark from '@/assets/icons/dark.svg'
import light from '@/assets/icons/light.svg'
import user from '@/assets/imgs/frame/user.jpeg'

interface IHeaderProps {
	width: number
}

function HeaderNav({ width }: IHeaderProps) {
	const { configStore, basicStore } = useStore()
	const { t } = useTranslation() // 国际化
	const navigate = useNavigate() // 路由跳转
	const [locales, setLocales] = useState<Array<any>>(['zh_CN']) // 默认中文环境
	const [visible, setVisible] = useState(false) // 设置面板显示状态

	useEffect(() => {
		if (localStorage.getItem('locale')) {
			setLocales([localStorage.getItem('locale')])
		}
	}, [])

	interface ILocale {
		key?: any
	}

	// 语言切换
	const handleSelect = ({ key }: ILocale) => {
		if (locales[0] !== key) {
			setLocales([key])
			configStore.switchLanguage(key)
			window.location.reload()
		}
	}

	// 主题风格
	const themeList: Array<any> = [
		{
			zh_CN_name: '暗色菜单风格',
			en_US_name: 'Dark style',
			style: 'dark',
			icon: dark
		},
		{
			zh_CN_name: '亮色菜单风格',
			en_US_name: 'Light style',
			style: 'light',
			icon: light
		}
	]

	// 主题色
	const colorList: Array<any> = [
		{
			zh_CN_name: '薄暮',
			en_US_name: 'Dust Red',
			color: '#F5222D'
		},
		{
			zh_CN_name: '火山',
			en_US_name: 'Volcano',
			color: '#FA541C'
		},
		{
			zh_CN_name: '日暮',
			en_US_name: 'Sunset Orange',
			color: '#FAAD14'
		},
		{
			zh_CN_name: '明青',
			en_US_name: 'Cyan',
			color: '#13C2C2'
		},
		{
			zh_CN_name: '极光绿',
			en_US_name: 'Polar Green',
			color: '#52C41A'
		},
		{
			zh_CN_name: '拂晓蓝（默认）',
			en_US_name: 'Daybreak Blue (default)',
			color: '#1890FF'
		},
		{
			zh_CN_name: '极客蓝',
			en_US_name: 'Geek Glue',
			color: '#2F54EB'
		},
		{
			zh_CN_name: '酱紫',
			en_US_name: 'Golden Purple',
			color: '#722ED1'
		}
	]

	// 退出登录
	const handleUserLogout = ({ key }: ILocale) => {
		if (key === 'logout') {
			basicStore.logout()
			navigate('/login', { replace: true })
		}
	}

	// 跳转git
	const handleLinkGit = () => {
		window.open('https://github.com/KinXpeng/react-admin-vite')
	}

	// 国际化菜单
	const languageMenu = (
		<Menu
			onClick={handleSelect}
			selectedKeys={locales}
			items={[
				{ label: '🇨🇳 简体中文', key: 'zh_CN' },
				{ label: '🇬🇧 English', key: 'en_US' }
			]}
		></Menu>
	)

	// 用户下拉设置
	const userMenu = (
		<Menu onClick={handleUserLogout} items={[{ label: '退出登录', key: 'logout', icon: <ImportOutlined /> }]}></Menu>
	)

	return (
		<div className="flex justify-between items-center relative w-full text-black text-opacity-60">
			{/* 面包屑导航 */}
			<Breadcrumb>
				{configStore.activeItem?.label && width > 500 ? (
					<>
						<Breadcrumb.Item>{configStore.parentItem.label}</Breadcrumb.Item>
						<Breadcrumb.Item>{configStore.activeItem.label}</Breadcrumb.Item>
					</>
				) : (
					''
				)}
			</Breadcrumb>

			<div className="flex">
				{/* 用户信息  */}
				<Dropdown overlay={userMenu} placement="bottomRight">
					<div className="w-14 text-center cursor-pointer hover:bg-gray-100">
						<Avatar src={user} />
					</div>
				</Dropdown>

				{/* 国际化 */}
				<Dropdown overlay={languageMenu} placement="bottomRight">
					<div className="w-10 text-center cursor-pointer hover:bg-gray-100">
						<GlobalOutlined className="text-base" />
					</div>
				</Dropdown>

				{/* github */}
				<div
					className="w-10 text-center cursor-pointer hover:bg-gray-100"
					title="react-admin-vite"
					onClick={handleLinkGit}
				>
					<GithubFilled className="text-base" />
				</div>

				{/* 设置 */}
				<div className="w-10 text-center cursor-pointer hover:bg-gray-100" onClick={() => setVisible(true)}>
					<SettingOutlined className="text-base" />
				</div>
			</div>

			{/* 设置面板 */}
			<Drawer width="280" placement="right" visible={visible} onClose={() => setVisible(false)} closable={false}>
				{/* 主题style */}
				<div>
					<h3 className="text-gray-700 mb-2.5 font-semibold">{t('header.page_style')}</h3>
					<div className="flex">
						{themeList.map((item) => (
							<span
								className="relative w-12 h-10 mr-4 rounded cursor-pointer"
								key={item.style}
								onClick={() => configStore.switchStyle(item.style)}
							>
								<Tooltip
									title={item[configStore.locale + '_name']}
									color={configStore.theme.primaryColor + 'B3'}
									key={configStore.theme.primaryColor}
								>
									<img className="w-full h-full" src={item.icon} alt="" />
								</Tooltip>
								{configStore.themeStyle === item.style ? (
									<CheckOutlined
										className="absolute right-2.5 bottom-2.5"
										style={{ color: configStore.theme.primaryColor }}
									/>
								) : (
									''
								)}
							</span>
						))}
					</div>
				</div>

				{/* 主题色 */}
				<div>
					<h3 className="font-semibold text-gray-700 mx-0 mt-4 mb-2.5">{t('header.theme_color')}</h3>
					<div className="flex">
						{colorList.map((item) => (
							<Tooltip title={item[configStore.locale + '_name']} color={item.color + 'B3'} key={item.color}>
								<span
									className="w-5 h-5 leading-5 text-center rounded-sm text-white mr-2 cursor-pointer flex items-center justify-center"
									style={{ background: item.color }}
									onClick={() => configStore.switchColor(item.color)}
								>
									{configStore.theme.primaryColor === item.color ? <CheckOutlined /> : ''}
								</span>
							</Tooltip>
						))}
					</div>
				</div>
			</Drawer>
		</div>
	)
}

export default observer(HeaderNav)
