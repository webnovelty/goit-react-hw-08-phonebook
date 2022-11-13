import { Routes, Route} from 'react-router-dom';
import Layout  from 'components/Layout';
import { NotFoundPage } from 'pages/NotFoundPage';
// import RegisterPage  from 'pages/Register';
// import LoginPage  from 'pages/Login';
// import Home from 'pages/Home';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import Contacts from 'pages/Contacts';


const Home = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

const App = () => {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();
	useEffect(() => {
		dispatch(refreshUser())
	}, [dispatch]);

	

	return isRefreshing ? ('Идем на сервер') : (

			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/register' element={
					<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />
					} />
					<Route
						path='/login'
						element={
							<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />
						}
					/>
					<Route
						path='/contacts'
						element={
							<PrivateRoute component={<Contacts />} redirectTo='/login' />
						}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		
	);
};

export default App;