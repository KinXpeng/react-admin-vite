import { ResponseCode } from './enum'

const ErrorHandle = {
	[ResponseCode.Fail]() {
		console.log('失败')
	},
	[ResponseCode.BAD_REQUEST]() {
		console.log('坏请求')
	},
	[ResponseCode.No_AUTHENTICATION]() {
		console.log('没有token')
	}
}

export default ErrorHandle
