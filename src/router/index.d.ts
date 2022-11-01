export interface Item {
	key?: string
	path?: string
	name?: string
	icon?: any
	label: string
	component?: any
}

export interface MenuItem extends Item {
	children?: Array<Item>
}
