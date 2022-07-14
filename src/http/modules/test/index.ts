import NRequest from '@/http/request/request'


class FetchTest extends NRequest {
	// api前缀
	private static prefix: string = '/artist'

	private apiDict: Record<string, string> = {
		artistTopSong: '/top/song'
	}

	constructor(baseURL: string) {
		super({ baseURL }, FetchTest.prefix)
	}

	public search = (params: TestParams.IartistTopSong) => this.instance!.get(
		this.apiDict.artistTopSong,
		{ params }
	)

}

export default FetchTest
