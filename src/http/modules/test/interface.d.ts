interface ISong {
	id: number
	name: string
	artists: IArtist[]
	album: IAlbum
	duration: number
	copyrightId: number
	status: number
	alias: void /* undefined */[]
	rtype: number
	ftype: number
	transNames: string[]
	mvid: number
	fee: number
	rUrl: void /* 未知类型 */
	mark: number
}

/* 自动生成的 Interface */

interface IAlbum {
	id: number
	name: string
	artist: IArtist_1
	publishTime: number
	size: number
	copyrightId: number
	status: number
	picId: number
	mark: number
}

interface IArtist_1 {
	id: number
	name: string
	picUrl: void /* 未知类型 */
	alias: void /* undefined */[]
	albumSize: number
	picId: number
	img1v1Url: string
	img1v1: number
	trans: void /* 未知类型 */
}

interface IArtist {
	id: number
	name: string
	picUrl: void /* 未知类型 */
	alias: void /* undefined */[]
	albumSize: number
	picId: number
	img1v1Url: string
	img1v1: number
	trans: void /* 未知类型 */
}

interface ISearch {
	songs: Array<ISong>
	hasMore: boolean
	songCount: number
}
