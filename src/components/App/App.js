import { Routes, Route} from 'react-router-dom';
import Layout  from 'components/Layout';
import { NotFoundPage } from 'pages/NotFoundPage';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;