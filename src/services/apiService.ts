export const fetchProducts = async (): Promise<{products:{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
  }[]; //products -empty array
}> => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data; // now typed without using an interface
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  } finally {
    console.log("Request finished (success or error)");
  }
};