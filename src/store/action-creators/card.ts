export interface CardState {
   cards: any[];
   error: null | string;
}

export enum CardActionTypes {
   FETCH_CARDS = 'FETCH_CARDS',
   FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
}

interface FetchCardsAction {
   type: CardActionTypes.FETCH_CARDS;
   payload: any[];
}

interface FetchCardsError {
   type: CardActionTypes.FETCH_CARDS_ERROR;
   payload: string;
}

export type CardActions = FetchCardsAction | FetchCardsError;
