import { nanoid } from 'nanoid';
import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from "react-redux";

import { Button, Form, Input, Label } from './ContactForm.styled';

const ContactForm = () => {

	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const dispatch = useDispatch();

	const handleChange = e => {
		if (e.target.name === 'name')
		{
			setName(e.currentTarget.value);
		};
		if (e.target.name === 'number') {
			setNumber(e.currentTarget.value);

		};
	
	};

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		dispatch(addContact(form.elements.name.value, form.elements.number.value));
		reset();
	};

	const reset = () => {
		setName('');
		setNumber('');
	};
		const nameId = nanoid(3);
		const numberId = nanoid(3);
		return (
			<>
				<Form onSubmit={handleSubmit}>
					<Label htmlFor={nameId}>Name:</Label>
					<Input
						type="text"
						name="name"
						value={name}
						id={nameId}
						placeholder="Name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						onChange={handleChange}
					/>
					<Label htmlFor={numberId}>Number:</Label>
					<Input
						type="tel"
						name="number"
						value={number}
						id={numberId}
						placeholder="Number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						onChange={handleChange}
					/>
					<Button type="submit">
						<AiOutlineUserAdd size={24} color={'blue'} />
					</Button>
				</Form>
			</>
		);
	}


export default ContactForm;