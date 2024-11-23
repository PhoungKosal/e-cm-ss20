"use server";
export const getAllProducts = async () => {
    const res = await fetch(`${process.env.API_URL}/api/products/products`)
    return res.json();
}


export const getProductID = async (id: number) => {
    const res = await fetch(`${process.env.API_URL}/api/products/products/${id}`);
    console.log(`${process.env.API_URL}/api/products/products/${id}`)
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

export const getProductsBySearch = async (search: string) => {
    const res = await fetch(`${process.env.API_URL}/api/products/products/search/?title=${search}`)
    console.log(`${process.env.API_URL}/api/products/products/search/?title=${search}`)
    return res.json();
}