import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
const reducers = {
    adminSlice
}
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
});

