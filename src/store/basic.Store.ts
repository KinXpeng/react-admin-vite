import { makeAutoObservable } from 'mobx'
import { setToken, getToken, clearToken } from '@/utils/token'

// 全局配置
class BasicStore {
	constructor() {
		makeAutoObservable(this)
	}
	token = getToken() || ''

	// 登录
	login = () => {
		this.token = '12323'
		setToken(this.token)
	}

	// 退出登录
	logout = () => {
		clearToken()
	}
}

export default BasicStore
