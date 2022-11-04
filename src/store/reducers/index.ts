import { combineReducers } from '@reduxjs/toolkit';
import { cardReducer } from './cardsReducer';
import { basketReducer } from './basketReducer';
import { cashReducer } from './cashReducer';

export const rootReducer = combineReducers({
   card: cardReducer,
   basket: basketReducer,
   cash: cashReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
