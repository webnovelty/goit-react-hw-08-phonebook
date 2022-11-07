
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Toaster, toast } from 'react-hot-toast';
import { useAddContactMutation} from 'redux/contactsSlice';


import { AppWrapper, Title, TitleContacts } from './Layout.styled';

const Layout = () => {

	const [addContact] = useAddContactMutation();
	
	const handleAddContact = async values => {
	
		try {
			await addContact(values);
			toast.success('Материал добавлен');
		} catch (error) {
			toast.error('Ошибка при добавлении материала');
			console.log(error);
		}


	};



	return (
		<AppWrapper>
			
			<Title>Phonebook</Title>
			<ContactForm onSubmit={handleAddContact} />

			<TitleContacts>Contacts</TitleContacts>

			<Filter />
			<ContactList />
			<Toaster />

		</AppWrapper>
	);
}


export default Layout;