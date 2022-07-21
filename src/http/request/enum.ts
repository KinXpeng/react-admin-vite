// 状态码 按需更改
export enum ResponseCode {
	SUCCESS = 200,
	BAD_REQUEST = 400,
	No_AUTHENTICATION = 401,
	Fail = 500
}

// 返回的数据模型
export enum ResponseKey {
	CODE = 'code',
	RESULT = 'data',
	MESSAGE = 'message'
}
