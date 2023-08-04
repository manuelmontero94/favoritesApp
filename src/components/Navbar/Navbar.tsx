import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog, FavoriteTable } from '..';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	const handleDialog = () => {
		dialogOpenSubject$.setSubject = true;
	};

	return (
		<>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Manuel TEST programming
					</Typography>
					<Button color="inherit" onClick={handleDialog}>
						Open Favorites
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
