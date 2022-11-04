import { BasketActions, BasketActionTypes, BasketState } from '../action-creators/basket';

const initialState: BasketState = {
   items: [],
};

export const basketReducer = (state = initialState, action: BasketActions): BasketState => {
   switch (action.type) {
      case BasketActionTypes.ADD_ITEM: {
         return { ...state, items: [...state.items, action.payload] };
      }
      case BasketActionTypes.REMOVE_ITEMS: {
         return { items: [] };
      }
      default:
         return state;
   }
};
