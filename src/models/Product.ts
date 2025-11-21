export class Product{
  // Properties
id: number;
title: string;
description: string;
category: string;
price: number;
discountPercentage: number;


// A constructor : initalizes  the variables above 

constructor (id:number, title:string, description:string ,category:string, price: number,discountPercentage: number){
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
}
 //*PRODUCT DETAILS BELOW// METHODS STATED BELOW:

    displayDetails():string {
        return `id: ${this.id}, Title: ${this.title}, Description: ${this.description}, Category: ${this.category}, Price: ${this.price},
        DiscountPercentage: ${this.discountPercentage}`;
    }

    getPriceWithDiscount():number {
        return this.price * (this.discountPercentage / 100) + this.price
    }
}
