import React from "react";
import OrderSummary from "@/components/order-summary";
import ProductCart from "@/components/client-component/product-cart";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Cart",
    description: "Product in Cart",
}
const CartPage = () => {
    return (
        <div className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 w-full ">
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Product in
                        Cart</h2>
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                        <div className="space-y-6">
                            <ProductCart/>
                        </div>
                        <OrderSummary/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPage;