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
    id: number;
    image: string;
    title: string;
    rating: number;
    price: number;
    offer?: string;
    link?: number;
    onAddToCart?: () => void;
    incrementCart?: () => void;
    decrementCart?: () => void;
    deleteItem?: () => void;
}

export interface CartItem {
    id: number;
    title: string;
    description?: string;
    price: number;
    image: string;
    quantity: number;
    rating?: {
        rate: number;
        count: number;
    }
}


export interface CartContextType {
    items: CartItem[];
    totalAmount: number;
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    itemQuantity: number;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    products: CartItem[];
    cart: boolean;
}


export type Action =
    | { type: 'SET_ITEMS'; payload: CartItem[] }
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: number }
    | { type: 'INCREMENT_QUANTITY'; payload: number }
    | { type: 'DECREMENT_QUANTITY'; payload: number };
