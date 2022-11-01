

import { Item, List } from './ContactList.styled';
import { useSelector} from "react-redux";
import { getContacts, getStatusFilter } from "redux/selectors";
import Contact from 'components/Contact';


const ContactList = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getStatusFilter);
	const normalized = filter.toLocaleLowerCase();
	const renderContacts = contacts.filter(contact =>
		contact.name.toLocaleLowerCase().includes(normalized)
	);

	return (
		<List>
			{renderContacts.map(({ id, name, number }) => (
				<Item key={id}>
					<Contact id={id} name={name} number={number} />
				</Item>
			))}
		</List>
	);
};

export default ContactList;