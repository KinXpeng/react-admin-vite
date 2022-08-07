import { observer } from 'mobx-react-lite'
// import { useState } from 'react';

const styles: any = {
	textAlign: 'center',
	paddingTop: '30px',
	title: {
		margin: '0 auto 30px',
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
	return (
		<div style={styles} className="w-full min-h-full cs-card">
			<h1 style={styles.title}>Warmly Welcome!</h1>
			<h1 style={styles.title}>
				The <span style={styles.fontC}>Backstage Management</span> System.
			</h1>
			<h2 style={styles.title}>Now</h2>
			<h3 style={styles.title}>
				<span style={styles.fontC}>React-admin-vite</span>
			</h3>
			<h2 style={styles.title}>is ready.</h2>
			<p style={styles.desc}>Here You Can Start Your Code!</p>
		</div>
	)
}

export default observer(Home)
