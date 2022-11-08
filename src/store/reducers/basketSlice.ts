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
         state.items.push({ ...action.payload, count: 1 });
      },
      removeItems(state) {
         state.items = [];
      },
      changeCount(state, action: PayloadAction<any>) {
         const item = state.items.find((item) => item.id === action.payload.id);
         if (item) {
            item.count = action.payload.count;
         }
      },
   },
});

export default basketSlice.reducer;
