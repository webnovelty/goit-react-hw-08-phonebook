
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';



import { AppWrapper, Title, TitleContacts } from './App.styled';

const App = () => {
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