import { AiOutlineUserAdd } from 'react-icons/ai';
import { Formik} from 'formik';
import { Button, Forms, Input, Label } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({onSubmit}) => {
	
	const handleSubmit = async (values, actions) => {
		await onSubmit(values);
		actions.setSubmitting(false);
		actions.resetForm();
	};


		return (
			<>
				<Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
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
						name="phone"			
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