import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import loaderSlice from './loader/loaderSlice';

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);