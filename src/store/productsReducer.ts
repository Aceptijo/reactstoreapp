const ADD_TASK = 'ADD_TASK';

const defaultState = {
   products: [],
};

export const productsReducer = (state = defaultState, action: any) => {
   switch (action.type) {
      case ADD_TASK: {
         return { ...state };
      }

      default:
         return state;
   }
};
