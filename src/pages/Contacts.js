
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Title, TitleContacts } from 'components/Layout/Layout.styled';
import { toast, Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useAddContactMutation } from 'redux/phoneBook/contactsSlice';

const Contacts = () => {


	const [addContact] = useAddContactMutation();

	const handleAddContact = async values => {

		try {
			await addContact(values);
			toast.success('Материал добавлен');
		} catch (error) {
			toast.error('Ошибка при добавлении1 материала');
			console.log(error);
		}


	};



	return (

		<>
			<Title>Phonebook</Title>
			<ContactForm onSubmit={handleAddContact} />

			<TitleContacts>Contacts</TitleContacts>

			<Filter />
			<ContactList />
			<Toaster />
				<Outlet />
		</>
	);

};
export default Contacts;