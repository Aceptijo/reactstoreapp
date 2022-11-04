export interface CashState {
   cash: number;
}

export enum CashActionTypes {
   INCREMENT = 'INCREMENT',
   DECREMENT = 'DECREMENT',
   CHANGE = 'CHANGE',
}

interface IncrementAction {
   type: CashActionTypes.INCREMENT;
   payload: number;
}

interface DecrementAction {
   type: CashActionTypes.DECREMENT;
   payload: number;
}

interface ChangeAction {
   type: CashActionTypes.CHANGE;
   payload: number;
}

export type CashActions = IncrementAction | DecrementAction | ChangeAction;
