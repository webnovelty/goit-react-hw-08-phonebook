import AppBar from 'components/AppBar';
import { AppWrapper } from 'components/Layout/Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {

	return (

		<AppWrapper>
			<AppBar />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
		</AppWrapper>

	);
}


export default Layout;