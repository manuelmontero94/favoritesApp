import { People } from '@/data';
import { Person } from '@/models';
import { addFavorite, addPerson } from '@/redux/states';
import store from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PeopleTable } from './components';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPerson(People));
	}, []);

	return (
		<div>
			<PeopleTable />
		</div>
	);
};

export default Home;
