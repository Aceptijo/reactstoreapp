export interface IChildren {
   title: string;
   variation: string[];
}

export interface IAnimals {
   name: string;
   children: IChildren[];
}

export interface ICard {
   id: number;
   name: string;
   description: string;
   price: number;
   oldPrice?: number;
   weight: number;
   avatar: any;
}
