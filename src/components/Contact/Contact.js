import PropTypes from 'prop-types';
import { AiFillAndroid, AiOutlineUserDelete } from 'react-icons/ai';
import { useDeleteContactMutation } from "redux/phoneBook/contactsSlice";
import { Button } from "./Contact.styled";


const Contact = ({ id, name, number }) => {

	const [deleteContact] = useDeleteContactMutation();

	return (
		<>
			<p>
				<AiFillAndroid size={34} color={'#00FF00'} />
			</p>
			{name}: {number}
			<Button type="button" onClick={() => deleteContact(id)} >
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