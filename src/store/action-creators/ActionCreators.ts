import axios from 'axios';
import { AppDispatch } from '../store';
import { ICard } from '../../types/types';
import { cardSlice } from '../reducers/cardSlice';

export const fetchCards = () => async (dispatch: AppDispatch) => {
   try {
      const response = await axios.get<ICard[]>(
         'https://635cf9ddfc2595be264ffcad.mockapi.io/api/card/cards'
      );
      dispatch(cardSlice.actions.cardsFetching(response.data));
   } catch (e) {
      dispatch(cardSlice.actions.cardsFetchingError('ERROR 322'));
   }
};
