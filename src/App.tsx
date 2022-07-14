import { FC } from 'react'
import RouterConfig from '@/router/index'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
// 国际化配置
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'moment/locale/zh-cn'
import enUS from 'antd/lib/locale/en_US'

const App: FC = () => {
	const { configStore } = useStore()
	ConfigProvider.config({
		// ui主题配置
		theme: configStore.theme
	})
	return (
		<ConfigProvider locale={configStore.locale === 'zh_CN' ? zhCN : enUS}>
			<RouterConfig />
		</ConfigProvider>
	)
}

export default observer(App)
