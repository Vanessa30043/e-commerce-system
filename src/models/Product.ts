export class Product {
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

}
