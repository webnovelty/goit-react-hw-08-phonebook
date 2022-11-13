import {useAuth}  from "hooks/useAuth";
import UserMenu  from "components/UserMenu/UserMenu";
import { Navigation }  from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav";
import { Header, NavSpan } from "./AppBar.styled";



const AppBar = () => {
	const { isLoggedIn } = useAuth();
	
	return (
		<Header>
			<NavSpan><Navigation /></NavSpan>
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</Header>
	)
}
export default AppBar;