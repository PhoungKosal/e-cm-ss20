"use client";

import React, {createContext, ReactNode, useReducer, useEffect} from 'react';

import {Action, CartContextType, CartItem} from "@/types";

const CartContext = createContext<CartContextType | undefined>(undefined);


const cartReducer = (state: { items: CartItem[] }, action: Action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {items: action.payload};
        case 'ADD_ITEM': {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            const updatedItems = existingItemIndex >= 0
                ? state.items.map((item, idx) =>
                    idx === existingItemIndex ? {...item, quantity: item.quantity + action.payload.quantity} : item
                )
                : [...state.items, {...action.payload, quantity: action.payload.quantity}];
            return {items: updatedItems};
        }
        case 'REMOVE_ITEM':
            return {items: state.items.filter(item => item.id !== action.payload)};
        case 'INCREMENT_QUANTITY':
            return {
                items: state.items.map(item => item.id === action.payload ? {
                    ...item,
                    quantity: item.quantity + 1
                } : item)
            };
        case 'DECREMENT_QUANTITY':
            return {
                items: state.items.map(item => item.id === action.payload && item.quantity > 1 ? {
                    ...item,
                    quantity: item.quantity - 1
                } : item)
            };
        default:
            return state;
    }
};


export const CartProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, {items: []});
    const cart = state.items.length > 0;
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        dispatch({type: 'SET_ITEMS', payload: storedItems});
    }, []);
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state.items));
    }, [state.items]);

    const addItem = (item: CartItem) => dispatch({type: 'ADD_ITEM', payload: item});
    const removeItem = (id: number) => dispatch({type: 'REMOVE_ITEM', payload: id});
    const incrementQuantity = (id: number) => dispatch({type: 'INCREMENT_QUANTITY', payload: id});
    const decrementQuantity = (id: number) => dispatch({type: 'DECREMENT_QUANTITY', payload: id});
    const totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    const itemQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    return (
        <CartContext.Provider value={{
            items: state.items,
            totalAmount,
            addItem,
            removeItem,
            itemQuantity,
            incrementQuantity,
            decrementQuantity,
            products: state.items,
            cart
        }}>
            {children}
        </CartContext.Provider>
    );
};
export const useCartContext = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
