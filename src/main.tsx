import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.variable.min.css'
// 引入国际化
import '@/i18n/index'

if (new Date().getDay() === 4) console.error('KFC Crazy Thursday need 50$.')

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
