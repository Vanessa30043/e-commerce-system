import Product from "./models/Product.js";
import { fetchProducts } from "./services/apiService.js";
async function main() {
    const product = await fetchProducts(); // returning a promise
    const productInstances = product.products.map((product) => new Product(product.id, product.title, product.description, product.category, product.price, product.discountPercentage));
    productInstances.forEach((prods) => {
        // looping through the products and calling the displayDetails and getPriceWithDiscount methods
        console.log(prods.displayDetails());
        console.log(prods.getPriceWithDiscount());
    });
}
main();
//const planner =  new PhysicalProduct("001","Planner",25,2) //sku ,Name, price, weight 
// //id: number;
// title: string;
// description: string;
// category: string;
// price: number;
// discountPercentage: number;
