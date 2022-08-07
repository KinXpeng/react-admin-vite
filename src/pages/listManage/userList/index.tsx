import { Space, Table, Tag } from 'antd'

function UserList() {
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer']
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser']
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher']
		}
	]
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text: any) => <a>{text}</a>
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age'
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address'
		},
		{
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
			render: (_: any, { tags }: any) => (
				<>
					{tags.map((tag: any) => {
						let color = tag.length > 5 ? 'geekblue' : 'green'

						if (tag === 'loser') {
							color = 'volcano'
						}

						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						)
					})}
				</>
			)
		},
		{
			title: 'Action',
			key: 'action',
			render: (_: any, record: any) => (
				<Space size="middle">
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			)
		}
	]

	const styles: any = {
		overflowX: 'auto'
	}
	return (
		<div style={styles} className="cs-card">
			<Table columns={columns} dataSource={data} bordered />
		</div>
	)
}

export default UserList
