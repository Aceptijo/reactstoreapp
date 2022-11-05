import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasketState {
   items: any[];
}

const initialState: BasketState = {
   items: [],
};

export const basketSlice = createSlice({
   name: 'item',
   initialState,
   reducers: {
      addItem(state, action: PayloadAction<any>) {
         state.items.push(action.payload);
      },
      removeItems(state) {
         state.items = [];
      },
   },
});

export default basketSlice.reducer;
