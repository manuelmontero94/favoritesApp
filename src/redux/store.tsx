import { Person } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
// import { favoritesSlice, peopleSlice } from './states';
import peopleReducer from './states/peopleSlice';
import favoritesReducer from './states/favoritesSlice';

export interface AppStore {
	people: Person[];
	favorites: Person[];
}

export default configureStore<AppStore>({
	reducer: {
		// people: peopleSlice.reducer,
		// favorites: favoritesSlice.reducer,
		people: peopleReducer,
		favorites: favoritesReducer,
	},
});
