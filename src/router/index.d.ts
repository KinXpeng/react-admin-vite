export interface Item {
	key?: string
	path?: string
	icon?: any
	label: string
	component?: any
}

export interface MenuItem extends Item {
	children?: Array<Item>
}
