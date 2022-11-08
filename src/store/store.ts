import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './reducers/cardSlice';
import { basketSlice } from './reducers/basketSlice';
import { favouriteSlice } from './reducers/favouriteSlice';

const rootReducer = combineReducers({
   card: cardSlice.reducer,
   basket: basketSlice.reducer,
   favourite: favouriteSlice.reducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
