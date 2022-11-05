import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './reducers/cardSlice';
import { cashReducer } from './reducers/cashReducer';
import { basketSlice } from './reducers/basketSlice';

const rootReducer = combineReducers({
   card: cardSlice.reducer,
   basket: basketSlice.reducer,
   cash: cashReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
