import { observer } from 'mobx-react-lite'
// import { useState } from 'react';

const styles: any = {
	textAlign: 'center',
	title: {
		margin: '30px auto',
		fontSize: '55px',
		fontWeight: '900',
		color: '#253445',
		whiteSpace: 'wrap',
		lineHeight: '1.25'
	},
	fontC: {
		backgroundImage: '-webkit-linear-gradient(315deg,#42d392 25%,#647eff)',
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontStyle: 'italic'
	},
	desc: {
		fontWeight: 'bold',
		fontSize: '18px',
		color: '#aaa'
	}
}
function Home() {
	// const [width, setWidth] = useState(window.innerWidth); // 窗口宽度
	// // 获取窗口宽度
	// window.onresize = () => {
	//   setWidth(window.innerWidth);
	// };
	return (
		<div style={styles}>
			<h1 style={styles.title}>
				Welcome The <span style={styles.fontC}>Backstage Management</span> System.
			</h1>
			<p style={styles.desc}>Here You Can Start Your Code!</p>
		</div>
	)
}

export default observer(Home)
