import type { IErrorHandler } from '@/http/request/interface'
import { clearToken } from '@/utils/token'

const noToken = () => {
	console.log('noToken')
	clearToken()
}

export const errorHandler: IErrorHandler = {
	401: noToken,
	403: () => {},
	500: () => {}
}
