"use client";
import React from "react";
import {useCartContext} from "@/contexts/cart-context";
import OrderSummary from "@/components/order-summary";
import ProductCard from "@/components/product-card";

const CartPage = () => {
    const {products} = useCartContext();
    return (
        <div className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 w-full min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 h-auto">
                <div className="mt-6 sm:mt-8 md:gap-8 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
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
                    </div>
                    <OrderSummary/>
                </div>
            </div>
        </div>
    );
}
export default CartPage;