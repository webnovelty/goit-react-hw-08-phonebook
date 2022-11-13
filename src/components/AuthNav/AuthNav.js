
import { ImEnter } from 'react-icons/im';
import { FaRegistered } from 'react-icons/fa';
import { Nav, NavLinkDec} from "./AuthNav.styled";

const AuthNav = () => {

	return (
		<Nav>
			<NavLinkDec to='/register'>
				<FaRegistered size={24} color={'blue'} />	Register
			</NavLinkDec>			
			<NavLinkDec to='/login'>
				<ImEnter size={24} color={'blue'} />	Login
				</NavLinkDec>			
		</Nav>
	)
};

export default AuthNav;