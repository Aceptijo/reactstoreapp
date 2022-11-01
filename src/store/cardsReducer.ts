const ADD_CARDS = 'ADD_CARDS';

const defaultState = {
   cards: [],
};

export const cardsReducer = (state = defaultState, action: any) => {
   switch (action.type) {
      case ADD_CARDS: {
         return { ...state, cards: [...state.cards, ...action.payload] };
      }
      default:
         return state;
   }
};

export const addCardsAction = (payload: any) => ({ type: ADD_CARDS, payload });
