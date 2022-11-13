import phonebook from 'img/phonebook.png';

const styles = {

	container: {
		minHeight: 'calc(100vh - 50px)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontWeight: 500,
		fontSize: 48,
		textAlign: 'center',
	},
};

export default function Home() {
	return (
		<div style={styles.container}>
			<h1 style={styles.title}>
				<div><img src={phonebook} width='200px' alt="phonebook" /></div>
				
				<p>Phone Book{' '}</p>
				<span role="img" aria-label="Greeting icon">
					💁‍♀️
				</span>
				<p>Register or Login pls</p>
			
			</h1>
		</div>
	);
}
