import Product from "./models/Product.js";
const apple = new Product(1, "Apple", "Gala Apple", "groceries", 1, 20);
const medicine = new Product(22, "Mucinex", "cough medicine", "medicine", 10, 5);
console.log(apple.displayDetails());
console.log(apple.getPriceWithDiscount());
console.log(medicine.displayDetails());
console.log(medicine.getPriceWithDiscount());
//const planner =  new PhysicalProduct("001","Planner",25,2) //sku ,Name, price, weight 
// //id: number;
// title: string;
// description: string;
// category: string;
// price: number;
// discountPercentage: number;
