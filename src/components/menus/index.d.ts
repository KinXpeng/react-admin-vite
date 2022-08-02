export interface Item {
	key: string
	path?: string
	icon?: any
	label: string
}

export interface MenuItem extends Item {
	children?: Array<Item>
}
