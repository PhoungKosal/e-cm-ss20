"use client";
import React from "react";
import {useCartContext} from "@/contexts/cart-context";
import OrderSummary from "@/components/order-summary";
import ProductCard from "@/components/product-card";


const CartPage = () => {
    const {products} = useCartContext();
    return (

        <div className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 w-full ">
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Product in Cart</h2>
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                        <div className="space-y-6">
                            {products && products.length > 0 ? (
                                products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        price={product.price}
                                        name={product.name}
                                        imageUrl={product.imageUrl}
                                        quantity={product.quantity}
                                    />
                                ))
                            ) : (
                                <div>Your Cart is Empty</div>
                            )}
                        </div>
                        <OrderSummary/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPage;