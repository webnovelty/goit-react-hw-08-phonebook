

import { Item, List } from './ContactList.styled';
import { useSelector } from "react-redux";
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { getStatusFilter } from "redux/selectors";
import Contact from 'components/Contact';


const ContactList = () => {
	const { data: contacts, error, isLoading } = useFetchContactsQuery();
	
	const filter = useSelector(getStatusFilter);

	const normalized = filter.toLocaleLowerCase();
	const renderContacts = contacts?.filter(contact =>
		contact.name.toLocaleLowerCase().includes(normalized)
	);

	return (
	<>
		{ error && (
			<p>
				Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте еще
				раз.
			</p>
			)}
			{isLoading ? (
				<b>Загружаем материалы</b>
			) : (
		<List>
						{renderContacts.map(({ id, name, phone }) => (
				<Item key={id}>
								<Contact id={id} name={name} phone={phone} />
				</Item>
			))}
				</List>
			)}
		</>
	);
};

export default ContactList;