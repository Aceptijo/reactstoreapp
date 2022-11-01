export interface IChildren {
   title: string;
   variation: string[];
}

export interface IAnimals {
   name: string;
   children: IChildren[];
}

export interface ICards {
   cards: ICard[];
}
export interface ICard {
   id: number;
   name: string;
   description: string;
   price: number;
   oldPrice?: number;
   avatar: any;
}
