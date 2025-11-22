export default function calculateTax(product) {
    const standardProductTaxRate = 0.0475;
    const groceryProductTaxRate = 0.03;
    console.log("standard product");
    if (product.category === "groceries") {
        return product.price * groceryProductTaxRate;
    }
    return product.price * standardProductTaxRate;
}
