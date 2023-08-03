import { Person, LocalStorageKeys } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: getLocalStorage(LocalStorageKeys.FAVORITES)
		? JSON.parse(localStorage.getItem(LocalStorageKeys.FAVORITES) as string)
		: initialState,
	reducers: {
		addFavorite: (state, action) => {
			setLocalStorage(LocalStorageKeys.FAVORITES, state);
			return action.payload;
		},
	},
});

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
