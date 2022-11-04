import { CardActionTypes, CardActions, CardState } from '../action-creators/card';

const initialState: CardState = {
   cards: [],
   error: null,
};

export const cardReducer = (state = initialState, action: CardActions): CardState => {
   switch (action.type) {
      case CardActionTypes.FETCH_CARDS: {
         return { error: null, cards: action.payload };
      }
      case CardActionTypes.FETCH_CARDS_ERROR: {
         return { error: action.payload, cards: [] };
      }
      default:
         return state;
   }
};
