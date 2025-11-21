import { Product } from "../models/Product.js";
//you have to import the class which is "Product" here.because in your parameter is "type"-"product".
//example below:
//function greet(name) { // 'name' is a parameter
//   console.log("Hello, " + name + "!");}
// greet("Alice"); // "Alice" is an argument
// greet("Bob");   // "Bob" is an argument

function calculateDiscount( product: Product): number {
return product.price * (product.discountPercentage / 100)
}

// instructions:
//  Discount Calculator Module (discountCalculator.ts):
// Create a calculateDiscount ) function to handle discount calculations for products.
// This function should return the dollar amount that a product is discounted by. 
// For example, if a product costs $100 and has a 10% discount, the function should return $10.