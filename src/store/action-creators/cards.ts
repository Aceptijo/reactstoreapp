import axios from 'axios';
import { Dispatch } from 'redux';
import { CardActions, CardActionTypes } from './card';

export const fetchCards = () => {
   return async (dispatch: Dispatch<CardActions>) => {
      try {
         const response = await axios.get(
            'https://635cf9ddfc2595be264ffcad.mockapi.io/api/card/cards'
         );
         dispatch({ type: CardActionTypes.FETCH_CARDS, payload: response.data });
      } catch (e) {
         dispatch({ type: CardActionTypes.FETCH_CARDS_ERROR, payload: 'Ошибочка' });
      }
   };
};
