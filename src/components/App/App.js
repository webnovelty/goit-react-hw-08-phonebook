
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';



import { AppWrapper, Title, TitleContacts } from './App.styled';

const App = () => {

	// useEffect(() => {
	// 	const contacts = localStorage.getItem('contacts');
	// 	const parsedContacts = JSON.parse(contacts);
	// 	if (parsedContacts) {
	// 		setContacts(parsedContacts);

	// 	}

	// }, []);

	// useEffect(() => {

	// 	localStorage.setItem('contacts', JSON.stringify(contacts));

	// }, [contacts]);

	// const addContact = (name, number) => {

	// 	const addContact = {
	// 		id: nanoid(5),
	// 		name,
	// 		number,
	// 	};

	// 	if (
	// 		contacts.find(
	// 			contact => contact.name.toLowerCase() === addContact.name.toLowerCase()
	// 		)
	// 	) {
	// 		return alert(`${addContact.name} is already in contacts.`);
	// 	}
	// 	setContacts(prevState => [addContact, ...prevState]);
	// };

	// const deleteContact = idContact => {

	// 	setContacts(prevState => prevState.filter(contact => contact.id !== idContact));

	// };

	// const filterContacts = e => {
	// 	setFilter(e.currentTarget.value);
	// };



	return (
		<AppWrapper>
			<Title>Phonebook</Title>
			<ContactForm/>

			<TitleContacts>Contacts</TitleContacts>

			<Filter />
			<ContactList/>

		</AppWrapper>
	);
}


export default App;