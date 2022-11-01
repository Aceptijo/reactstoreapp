import axios from 'axios';
import { ICards } from '../types/types';
import { addCardsAction } from '../store/cardsReducer';




export const fetchCards = async () => {
   return async (dispatch: any) => {
      const response = await axios.get<ICards[]>(
         'https://635cf9ddfc2595be264ffcad.mockapi.io/api/card/cards'
      );
      dispatch(addCardsAction(response));
   };
};
