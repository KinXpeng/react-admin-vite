import { ResponseCode } from '@/http/request/enum'

export interface IErrorHandler {
	[ResponseCode.noToken]: () => unknown
	[ResponseCode.accessDenied]: () => unknown
	[ResponseCode.fail]: () => unknown
}
