export const getAllProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}


export const getProductID = async (id: number) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}

export const getAllCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    return res.json();
}

export const getProductsByCategory = async (category: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return res.json();
}