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

export interface userType {
    id: string;
    full_name: string;
    email: string;
    role: string;
    gender: string;
    phone: string;
    address: string;
    image: string;
    is_active: boolean;
    created_at: string;
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
    rating?: number;
    

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
