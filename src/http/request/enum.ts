export enum ResponseKey {
	code = 'code', // 状态码
	message = 'message', // 返回消息
	data = 'data' // 数据
}

// 自定义状态码返回对应数据
export enum ResponseCode {
	success = 200,
	noToken = 401,
	accessDenied = 403,
	fail = 500
}
