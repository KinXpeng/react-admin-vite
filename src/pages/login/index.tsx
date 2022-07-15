import { useState } from 'react'
import { Form, Input, Button, Checkbox, Spin, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'

interface IFormValues {
	username: string
	password: string
	remember: boolean
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
		<div className="w-full h-full">
			<Spin spinning={loading}>
				<div className="h-64 mb-3 bg-white"></div>
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
								<Checkbox className="w-2/5 select-none">{t('login.remember')}</Checkbox>
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
	)
}
export default observer(Login)
