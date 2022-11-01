import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input, Title } from './Filter.styled';
import { useSelector, useDispatch } from "react-redux";
import { getStatusFilter } from 'redux/selectors';
import {setStatusFilter} from 'redux/filtersSlice'

const Filter = () => {
	const dispatch = useDispatch();
	const filter = useSelector(getStatusFilter);

	const filterContacts = e => {
		dispatch(setStatusFilter(e.currentTarget.value));
	};

	const filterId = nanoid(3);
	return (
		<Label htmlFor={filterId}>
			<Title>Find contacts by name</Title>
			<Input
				type="text"
				placeholder="Input name"
				value={filter}
				onChange={filterContacts}
				id={filterId}
			/>
		</Label>
	);
};

export default Filter;