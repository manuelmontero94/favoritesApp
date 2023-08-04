import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import store from '@/redux/store';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
	const favoritesState = useSelector((state: any) => state.favorites);
	const pageSize = 5;
	const dispatch = useDispatch();

	const findPerson = (person: Person) => !!selectedPeople.find((p) => p.id === person.id);
	const filterPerson = (person: Person) => selectedPeople.filter((p) => p.id !== person.id);

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
			rows={favoritesState}
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

export default FavoriteTable;
