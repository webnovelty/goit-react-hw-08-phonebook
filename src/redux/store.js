import { configureStore} from '@reduxjs/toolkit';
import {
	FLUSH, PAUSE,
	PERSIST, persistReducer, persistStore, PURGE,
	REGISTER, REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { filtersReducer } from 'redux/phoneBook/filtersSlice';
import { contactsApi } from 'redux/phoneBook/contactsSlice';


const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}

export const store = configureStore({
	reducer: {
		[contactsApi.reducerPath]: contactsApi.reducer,
		filters: filtersReducer,
		auth: persistReducer(authPersistConfig, authReducer),
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
		contactsApi.middleware,
	],
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);