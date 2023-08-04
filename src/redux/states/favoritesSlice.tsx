import { Person, LocalStorageKeys } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice, current } from '@reduxjs/toolkit';

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
		removeFavorite: (state, action) => {
			const filteredState = current(state).filter((p: Person) => p.id !== action.payload.id);
			setLocalStorage(LocalStorageKeys.FAVORITES, filteredState);
			return filteredState;
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
