import { createContext } from 'react';
import { IContext } from '../../types/types';

export const Context = createContext<IContext>({
   quantity: 1,
   setQuantity: () => {},
});
