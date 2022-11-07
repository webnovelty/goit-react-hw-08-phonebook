import PropTypes from 'prop-types';
import { AiFillAndroid, AiOutlineUserDelete } from 'react-icons/ai';
import { useDeleteContactMutation } from "redux/contactsSlice";
import { Button } from "./Contact.styled";


const Contact = ({ id, name, phone }) => {

	const [deleteContact] = useDeleteContactMutation();

	return (
		<>
			<p>
				<AiFillAndroid size={34} color={'#00FF00'} />
			</p>
			{name}: {phone}
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
	phone: PropTypes.string.isRequired,
};