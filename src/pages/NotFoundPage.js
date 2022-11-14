import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
	return (
		<p>
			Sorry, this page not found{' '}
			<Link to="/">Go to Home</Link>
		</p>
	);
};
