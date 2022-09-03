import { useState } from 'react'
import { Form, Input, Button, Checkbox, Spin, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import logoOrigin from '@/assets/imgs/frame/logo_origin.png'

interface IFormValues {
	username: string
	password: string
	remember: boolean
}

const style: any = {
	container: {
		background: 'linear-gradient(to right, #cbb4d8 0%, #97db97 0%, #b465da 0%, #e4a7e0 33%, #d8779f 66%, #e980ac 100%)'
	},
	li: {
		listStyleType: 'none',
		display: 'block',
		position: 'absolute',
		bottom: '-120px',
		width: '15px',
		height: '15px',
		zIndex: '-8',
		backgroundColor: 'rgba(255, 255, 255, 0.15)'
	}
}
const liStyle = {
	F: {
		...style.li,
		animationDuration: '10s'
	},
	S: {
		...style.li,
		animationDuration: '15s'
	},
	T: {
		...style.li,
		animationDuration: '18s'
	},
	Fo: {
		...style.li,
		animationDuration: '12s',
		animationDelay: '3s'
	},
	Fi: {
		...style.li,
		animationDuration: '16s',
		animationDelay: '5s'
	},
	Si: {
		...style.li,
		animationDuration: '8s'
	},
	Se: {
		...style.li,
		animationDuration: '15s',
		animationDelay: '3s',
		left: '70%'
	},
	E: {
		...style.li,
		animationDelay: '4s'
	},
	N: {
		...style.li,
		animationDuration: '28s',
		left: '82%'
	},
	Te: {
		...style.li,
		animationDuration: '20s',
		animationDelay: '6s',
		left: '90%'
	}
}

function Login() {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const { basicStore, configStore } = useStore()
	const [loading, setLoading] = useState(false)
	// 登录
	const onFinish = (values: IFormValues) => {
		basicStore.login()
		if (values.username == 'admin' && values.password == '123456') {
			message.success(t('login.success'))
			setLoading(true)
			setTimeout(() => {
				navigate('/', { replace: true })
				configStore.crumbItem()
				setLoading(false)
			}, 1000)
		} else {
			message.error(t('login.error'))
		}
	}
	return (
		<div className="w-full h-full flex justify-center items-center opacity-80" style={style.container}>
			{/* Login Form */}
			<div className="w-2/3 sm:w-2/5 xl:w-1/3 2xl:w-1/4 rounded-xl pt-5 px-5 bg-white">
				<Spin spinning={loading}>
					<div className="max-w-xs w-2/3 h-12 mb-8 mx-auto">
						<img className="w-full h-full px-3 sm:px-10" src={logoOrigin} alt="" />
					</div>
					<Form
						name="normal_login"
						className="max-w-xs !m-auto"
						initialValues={{
							remember: true
						}}
						onFinish={onFinish}
					>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: t('login.username_check')
								}
							]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={t('login.username')} />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: t('login.password_check')
								}
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder={t('login.password')}
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<div className="flex items-center">
									<Checkbox className="w-3/5 select-none">{t('login.remember')}</Checkbox>
								</div>
							</Form.Item>
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit" className="w-full">
								{t('login.login')}
							</Button>
						</Form.Item>
					</Form>
				</Spin>
			</div>

			{/* background */}
			<ul className="overflow-hidden absolute top-0 left-0 w-full h-full -z-20">
				<li style={liStyle.F} className="animate-square left-0"></li>
				<li style={liStyle.S} className="!w-10 !h-10 animate-square left-16"></li>
				<li style={liStyle.T} className="!w-6 !h-6 animate-square left-1/4"></li>
				<li style={liStyle.Fo} className="!w-12 !h-12 animate-square left-1/3"></li>
				<li style={liStyle.Fi} className="!w-16 !h-16 animate-square left-1/2"></li>
				<li style={liStyle.S} className="animate-square left-2/3"></li>
				<li style={liStyle.Se} className="!w-24 !h-24 animate-square"></li>
				<li style={liStyle.N} className="!w-28 !h-28 animate-square left-3/4"></li>
				<li style={liStyle.E} className="!w-16 !h-16 animate-square"></li>
				<li style={liStyle.Te} className="!w-20 !h-20 animate-square"></li>
			</ul>
		</div>
	)
}
export default observer(Login)
