import { CashActions, CashActionTypes, CashState } from '../action-creators/cash';

const initialState: CashState = {
   cash: 1,
};

export const cashReducer = (state = initialState, action: CashActions): CashState => {
   switch (action.type) {
      case CashActionTypes.INCREMENT: {
         return { ...state, cash: state.cash + action.payload };
      }
      case CashActionTypes.DECREMENT: {
         return { ...state, cash: state.cash - action.payload };
      }
      case CashActionTypes.CHANGE: {
         return { ...state, cash: action.payload };
      }
      default:
         return state;
   }
};
