"use client";
import React from 'react';
import {Car} from "lucide-react";
import {useCartContext} from "@/contexts/cart-context";
import Image from "next/image";

const PaymentSummary: React.FC = () => {
    const {totalAmount, itemQuantity} = useCartContext();
    return (
        <div className="mt-6 grow sm:mt-8 lg:mt-0 space-y-3">
            <div
                className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">${totalAmount.toFixed(2)}</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Quantity</dt>
                        <dd className="text-base font-medium text-green-500">{itemQuantity}</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Shipping</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">Free !</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">$0</dd>
                    </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">${totalAmount.toFixed(2)}</dd>
                </dl>
            </div>
            <div className="flex items-center justify-center gap-8">
                <Image
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                    alt="Visa" width={100} height={100}
                />
                <Image
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                    alt="Visa Dark"
                    width={100} height={100}
                />
                <Image
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                    alt="Mastercard"
                    width={100} height={100}
                />
                <Image
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                    alt="Mastercard Dark"
                    width={100} height={100}
                />
            </div>
            <div
                className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="space-y-2">
                    <div className="flex space-x-2">
                        <div className="flex items-center justify-center basis-1/3">
                            <Car className="text-gray-500 dark:text-gray-400" size={50}/>
                        </div>
                        <div className="flex flex-col basis-10/12">
                            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Free
                                Shipping</h1>
                            <p>Now, Tinh Serey has a promotion with 3 months of free shipping</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaymentSummary;
