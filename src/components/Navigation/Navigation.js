
import { useAuth } from "hooks/useAuth";
import { Nav, NavLinkMenu } from "./Navigation.styled";

export const Navigation = () => {
	const { isLoggedIn } = useAuth();

	return (
		<Nav>
			<NavLinkMenu to='/'>
				Home
			</NavLinkMenu>
			{isLoggedIn && (
				<NavLinkMenu to='/contacts'>
					Contacts
				</NavLinkMenu>
			)}
		</Nav>
	)
}