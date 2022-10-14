import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';


import { AppWrapper, Title, TitleContacts } from './App.styled';

const App = () => {

	const [contacts, setContacts] = useState([
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		const contacts = localStorage.getItem('contacts');
		const parsedContacts = JSON.parse(contacts);
		if (parsedContacts) {
			setContacts(parsedContacts);

		}

	}, []);

	useEffect(() => {

		localStorage.setItem('contacts', JSON.stringify(contacts));

	}, [contacts]);

	const addContact = (name, number) => {

		const addContact = {
			id: nanoid(5),
			name,
			number,
		};

		if (
			contacts.find(
				contact => contact.name.toLowerCase() === addContact.name.toLowerCase()
			)
		) {
			return alert(`${addContact.name} is already in contacts.`);
		}
		setContacts(prevState => [addContact, ...prevState]);
	};

	const deleteContact = idContact => {

		setContacts(prevState => prevState.filter(contact => contact.id !== idContact));

	};

	const filterContacts = e => {
		setFilter(e.currentTarget.value);
	};

	const normalized = filter.toLocaleLowerCase();
	const renderContacts = contacts.filter(contact =>
		contact.name.toLocaleLowerCase().includes(normalized)
	);

	return (
		<AppWrapper>
			<Title>Phonebook</Title>
			<ContactForm onSubmit={addContact} />

			<TitleContacts>Contacts</TitleContacts>

			<Filter value={filter} onFilterContacts={filterContacts} />
			<ContactList
				contacts={renderContacts}
				onDeleteContact={deleteContact}
			/>

		</AppWrapper>
	);
}


export default App;