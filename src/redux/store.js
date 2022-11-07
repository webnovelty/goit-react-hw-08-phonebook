import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice';
import { contactsApi } from './contactsSlice';


const rootReducer = combineReducers({
	[contactsApi.reducerPath]: contactsApi.reducer,
	filters: filtersReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	 middleware: getDefaultMiddleware => [
		...getDefaultMiddleware(),
		 contactsApi.middleware,
	],
});