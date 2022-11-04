export interface BasketState {
   items: any[];
}

export enum BasketActionTypes {
   ADD_ITEM = 'ADD_ITEM',
   REMOVE_ITEMS = 'REMOVE_ITEMS',
}

interface AddItemAction {
   type: BasketActionTypes.ADD_ITEM;
   payload: any[];
}

interface RemoveItemsAction {
   type: BasketActionTypes.REMOVE_ITEMS;
   payload: any[];
}

export type BasketActions = RemoveItemsAction | AddItemAction;
