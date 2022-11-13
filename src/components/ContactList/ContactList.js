

import Contact from 'components/Contact';
import { useSelector } from "react-redux";
import { useFetchContactsQuery } from 'redux/phoneBook/contactsSlice';
import { getStatusFilter } from "redux/phoneBook/selectors";
import { Item, List } from './ContactList.styled';


const ContactList = () => {
	const { data: contacts, error, isLoading } = useFetchContactsQuery();

	const filter = useSelector(getStatusFilter);

	const normalized = filter.toLocaleLowerCase();
	const renderContacts = contacts?.filter(contact =>
		contact.name.toLocaleLowerCase().includes(normalized)
	);

	return (
		<>
			{error && (
				<p>
					Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте еще
					раз.
				</p>
			)}
			{isLoading ? (
				<b>Загружаем материалы</b>
			) : (
				<List>
					{renderContacts.map(({ id, name, number }) => (
						<Item key={id}>
							<Contact id={id} name={name} number={number} />
						</Item>
					))}
				</List>
			)}
		</>
	);
};

export default ContactList;