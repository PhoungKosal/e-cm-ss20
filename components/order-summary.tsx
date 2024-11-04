"use client";
import React from "react";
import {useCartContext} from "@/contexts/cart-context";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const OrderSummary = () => {
    const {totalAmount, itemQuantity} = useCartContext();
    return (
        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0">
            <div
                className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Total Price
                            </dt>
                            <dd className="text-base font-medium text-gray-900 dark:text-white">${totalAmount.toFixed(2)}</dd>
                        </dl>
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Quantity</dt>
                            <dd className="text-base font-medium text-green-600">{itemQuantity}</dd>
                        </dl>
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Delivery</dt>
                            <dd className="text-base font-medium text-green-600 dark:text-white">Free</dd>
                        </dl>
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                            <dd className="text-base font-medium text-gray-900 dark:text-white">0%</dd>
                        </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">${totalAmount.toFixed(2)}</dd>
                    </dl>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Link href={'/product/payment'}>
                        <Button variant={'default'}>Processed Payment</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default OrderSummary;