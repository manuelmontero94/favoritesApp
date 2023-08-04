import { People } from '@/data';
import { addPerson } from '@/redux/states';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
