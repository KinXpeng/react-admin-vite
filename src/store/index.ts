import React from 'react'
import ConfigStore from './config.Store'
import BasicStore from './basic.Store'

class RootStore {
	public configStore: ConfigStore
	public basicStore: BasicStore
	constructor() {
		this.configStore = new ConfigStore()
		this.basicStore = new BasicStore()
	}
}

// 实例化根store
const context = React.createContext(new RootStore())
export const useStore = () => React.useContext(context)
