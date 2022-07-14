import ApiModules from '@/http/modules'
import { Button } from 'antd'

function DiaryList() {
	const handleFetchTest = async () => {
		try {
			const { test } = ApiModules.modules
			const data = await test.search({ id: '6452' })
			console.log(data)
		} catch (err) {
			console.log(err, 'err')
		}
	}

	return (
		<div>
			<p>日记测试页面</p>
			<Button type='primary' onClick={handleFetchTest}>
				api
			</Button>
		</div>
	)
}

export default DiaryList
