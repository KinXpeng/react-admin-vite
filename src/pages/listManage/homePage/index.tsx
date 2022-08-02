import { fetchTestApi } from '@/http'
import { Button } from 'antd'

function DiaryList() {
	const handleFetchTest = async () => {
		try {
			fetchTestApi('111').then((res) => {
				console.log(res)
			})
		} catch (err) {
			console.log(err, 'err')
		}
	}

	return (
		<div>
			<p>日记测试页面</p>
			<Button type="primary" onClick={handleFetchTest}>
				api
			</Button>
		</div>
	)
}

export default DiaryList
