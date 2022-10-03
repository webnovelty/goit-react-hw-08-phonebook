import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { AiFillAndroid } from 'react-icons/ai';
import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
	return (
		<List>
			{contacts.map(({ id, name, number }) => (
				<Item key={id}>
					<p>
						<AiFillAndroid size={34} color={'#00FF00'} /> 
					</p>
					{name}: {number}
					<Button type="button" onClick={() => onDeleteContact(id)}>
						<AiOutlineUserDelete size={24} color={'blue'} />
					</Button>
				</Item>
			))}
		</List>
	);
};

export default ContactList;

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
	onDeleteContact: PropTypes.func.isRequired,
};