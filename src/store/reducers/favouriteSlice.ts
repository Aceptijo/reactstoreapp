import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavouriteState {
   items: any[];
}

const initialState: FavouriteState = {
   items: [],
};

export const favouriteSlice = createSlice({
   name: 'favourite',
   initialState,
   reducers: {
      addItem(state, action: PayloadAction<any>) {
         state.items.push(action.payload);
      },
      removeAllItems(state) {
         state.items = [];
      },
   },
});
