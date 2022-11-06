import React from 'react';

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

export interface IContext {
   quantity: number;
   setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
