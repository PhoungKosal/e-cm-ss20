export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    password: string;
    role: string;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    refreshToken?: string;
}

export interface CardProps {
    image: string;          // URL of the product image
    title: string;          // Title of the product
    rating: number;         // Rating of the product (out of 5)
    price: number;          // Price of the product
    offer?: string;         // Optional promotional offer text
    link?: number;          // Optional link to the product page
    onAddToCart?: () => void; // Function to call when the "Add to cart" button is clicked
}