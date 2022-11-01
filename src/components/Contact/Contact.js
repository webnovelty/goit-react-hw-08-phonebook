import { useDispatch } from "react-redux";
import { Button } from "./Contact.styled";
import { deleteContact } from "redux/contactsSlice";
import PropTypes from 'prop-types';
import { AiFillAndroid, AiOutlineUserDelete } from 'react-icons/ai';

const Contact = ({ id, name, number }) => {
	const dispatch = useDispatch();
	const handleDelete = () => dispatch(deleteContact(id));

	return (
		<>
		<p>
			<AiFillAndroid size={34} color={'#00FF00'} />
		</p>
					{ name }: { number }
	<Button type="button" onClick={handleDelete} >
		<AiOutlineUserDelete size={24} color={'blue'} />
			</Button>
		</>
	);
};
export default Contact;

Contact.propTypes = {
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
};