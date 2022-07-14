import FetchTest from '@/http/modules/test'

class ApiModules {
	/*
	 * TODO: 环境变量切换 baseURL
	 * */
	private static baseURL: string = '/api'

	public static readonly modules = {
		test: new FetchTest(this.baseURL)
	}
}

export default ApiModules
