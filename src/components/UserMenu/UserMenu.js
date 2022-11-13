import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { Div, Button, Title, Span } from "./UserMenu.styled";


const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();

	const handleLogOut = () => dispatch(logOut());
	return (
		<Div>
			<Title>Welcome, <Span>{user.name}</Span></Title>
			<Button type="button" onClick={handleLogOut}>Logout</Button>
		</Div>
	);
};

export default UserMenu;