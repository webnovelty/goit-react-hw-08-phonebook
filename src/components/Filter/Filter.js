import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, Input, Title } from './Filter.styled';

// import { Button } from './FeedbackOptions.styled';

const Filter = ({ value, onFilterContacts }) => {
	const filterId = nanoid(3);
	return (
		<Label htmlFor={filterId}>
			<Title>Find contacts by name</Title>
			<Input
				type="text"
				placeholder="Input name"
				value={value}
				onChange={onFilterContacts}
				id={filterId}
			/>
		</Label>
	);
};

export default Filter;

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onFilterContacts: PropTypes.func.isRequired,
};