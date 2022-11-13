import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useFetchContactsQuery } from 'redux/phoneBook/contactsSlice';
import { Button, Forms, Input, Label } from './ContactForm.styled';


const ContactForm = ({ onSubmit }) => {
	const { data: contacts } = useFetchContactsQuery();

	const handleSubmit = async (values, actions) => {

		if (
			contacts.find(
				contact => contact.name.toLowerCase() === values.name.toLowerCase()
			)
		) {
			return alert(`${values.name} is already in contacts.`);
		}
		await onSubmit(values);
		actions.setSubmitting(false);
		actions.resetForm();
	};


	return (
		<>
			<Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
				{({ isSubmitting }) => (
					<Forms>
						<Label>Name:</Label>
						<Input
							type="text"
							name="name"
							placeholder="Name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							required

						/>
						<Label>Phone:</Label>
						<Input
							type="tel"
							name="number"
							placeholder="Number"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
							required

						/>
						<Button type="submit" disabled={isSubmitting}>
							<AiOutlineUserAdd size={24} color={'blue'} />
						</Button>
					</Forms>
				)}
			</Formik>
		</>
	);
}


export default ContactForm;

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};