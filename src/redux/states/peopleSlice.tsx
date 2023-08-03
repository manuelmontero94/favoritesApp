import { Person, LocalStorageKeys } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Person[] = [];

export const peopleSlice = createSlice({
	name: 'people',
	initialState: getLocalStorage(LocalStorageKeys.PEOPLE)
		? JSON.parse(localStorage.getItem(LocalStorageKeys.PEOPLE) as string)
		: initialState,
	reducers: {
		addPerson: (state, action) => {
			setLocalStorage(LocalStorageKeys.PEOPLE, state);
			return action.payload;
		},
	},
});

export const { addPerson } = peopleSlice.actions;
export default peopleSlice.reducer;
