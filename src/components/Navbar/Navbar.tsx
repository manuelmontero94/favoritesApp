import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog, FavoriteTable } from '..';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import StarIcon from '@mui/icons-material/Star';

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

					<IconButton color="secondary" size="small" onClick={() => handleDialog()}>
						<Typography color={'white'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Open
						</Typography>

						<StarIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
