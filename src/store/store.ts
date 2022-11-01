import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { cardsReducer } from './cardsReducer';
import { productsReducer } from './productsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   cards: cardsReducer,
   products: productsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
