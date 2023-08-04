import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
	const peopleState = useSelector((state: AppStore) => state.people);
	const favoritesState = useSelector((state: AppStore) => state.favorites);
	const pageSize = 5;
	const dispatch = useDispatch();

	useEffect(() => {
		setSelectedPeople(favoritesState);
	}, [favoritesState]);

	const findPerson = (person: Person) => !!favoritesState.find((p) => p.id === person.id);
	const filterPerson = (person: Person) => favoritesState.filter((p) => p.id !== person.id);

	const handleSelectedChange = (person: Person) => {
		const filtered = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
		dispatch(addFavorite(filtered));
		setSelectedPeople(filtered);
	};

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			with: 50,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{
						<Checkbox
							size="small"
							checked={findPerson(params.row)}
							onChange={() => {
								handleSelectedChange(params.row);
							}}
						/>
					}
				</>
			),
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
	];
	return (
		<DataGrid
			rows={peopleState}
			columns={columns}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			initialState={{
				pagination: {
					paginationModel: {
						pageSize,
					},
				},
			}}
			pageSizeOptions={[pageSize]}
			getRowId={(row) => row.id}
		/>
	);
};

export default PeopleTable;
