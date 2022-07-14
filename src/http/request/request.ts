import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from '@/utils/token'
import { ResponseCode, ResponseKey } from '@/http/request/enum'
import { message } from 'antd'
import { errorHandler } from '@/http/request/errorHandler'

/*
* TODO: 取消请求
*  		请求进度条
* 		请求方法封装
* */
export default class NRequest {
	private _instance: AxiosInstance | undefined

	get instance(): AxiosInstance | undefined {
		return this._instance
	}

	set instance(value: AxiosInstance | undefined) {
		this._instance = value
	}

	constructor(config: AxiosRequestConfig = {}, prefix: string) {
		const { baseURL, ...rest } = config
		this._instance = axios.create({
			baseURL: baseURL + prefix,
			timeout: 1000 * 20,
			withCredentials: true, // 携带cookie
			...rest
		})

		// 请求拦截
		this.requestInterceptor()
		// 响应拦截
		this.responseInterceptor()
	}

	private requestInterceptor() {
		this.instance!.interceptors.request.use(
			(config: AxiosRequestConfig = {}) => {

				if (config.headers) {
					config.headers.Authorization = getToken()
				}

				return config
			},
			(error) => {
				// 请求错误
				return Promise.reject(error)
			}
		)
	}

	private responseInterceptor() {
		this.instance!.interceptors.response.use(
			(response: AxiosResponse) => {
				return new Promise((resolve, reject) => {
					const { status, data } = response

					// 说明axios 都失败了
					if (status !== 200) reject(data)

					// 不是成功状态码
					if (data[ResponseKey.code] !== ResponseCode.success) {
						message.error((data[ResponseKey.message]))

						// 其它状态码转交给errorHandler 处理
						errorHandler[data[ResponseKey.code] as keyof typeof errorHandler]()
						reject(data)
					}

					// 成功返回
					resolve(data)
				})
			},
			(error) => {
				message.error(error.message)
				return Promise.reject(error)
			}
		)
	}
}
