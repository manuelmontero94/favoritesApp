import { People } from '@/data';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
	const pageSize = 5;

	const findPerson = (person: Person) => !!selectedPeople.find((p) => p.id === person.id);
	const filteredPerson = (person: Person) => selectedPeople.filter((p) => p.id !== person.id);

	const handleSelectedChange = (person: Person) => {
		console.log('selectedPeople', selectedPeople);
		setSelectedPeople(findPerson(person) ? filteredPerson(person) : [...selectedPeople, person]);
		console.log('selectedPeople', selectedPeople);
	};

	const columns = [
		{
			field: 'actions',
			headerName: '',
			type: 'actions',
			sortable: false,
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
		<div>
			<DataGrid
				rows={People}
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
		</div>
	);
};

export default Home;
