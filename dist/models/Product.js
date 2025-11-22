import calculateDiscount from "../utils/discountCalculator.js";
import calculateTax from "../utils/taxCalculator.js";
export default class Product {
    // Properties
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    // A constructor : initalizes  the variables above 
    constructor(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    //*PRODUCT DETAILS BELOW// METHODS STATED BELOW:
    displayDetails() {
        return `id: ${this.id}, Title: ${this.title}, Description: ${this.description}, Category: ${this.category}, Price: ${this.price},
        DiscountPercentage: ${this.discountPercentage}`;
    }
    getPriceWithDiscount() {
        const discountValue = calculateDiscount(this); // These are variables on ln 31- ln 34
        const priceAfterDiscount = this.price - discountValue; //
        const taxValue = calculateTax(this); // (this) refers to the current instance "object" that is calling the method or coming from the API.
        const totalCost = priceAfterDiscount + taxValue; //
        return `Final Price with Discount: $${totalCost.toFixed(2)}`; // FIRST DOLLAR SIGN IS JUST FOR THE PRICE 
        // AND  THE SECOND DOLLAR SIGN "$"ONE IS FOR THE TEMPLATE LITERAL VARIABLE AND THE ".TOFIXED" IS A METHOD THAT RETURNS A FIXED AMOUNT 
        // OF DECIMAL POINTS GIVEN FOR EXAMPLE "(2)" WOULD BE UP TO TWO DECIMAL POINTS IN THE GIVEN SOLUTION.
    }
}
