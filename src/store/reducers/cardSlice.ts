import { ICard } from '../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
   cards: ICard[];
   error: string;
}

const initialState: CardState = {
   cards: [],
   error: '',
};

export const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {
      cardsFetching(state, action: PayloadAction<ICard[]>) {
         state.cards = action.payload;
         state.error = '';
      },
      cardsFetchingError(state, action: PayloadAction<string>) {
         state.error = action.payload;
         state.cards = [];
      },
   },
});

export default cardSlice.reducer;
