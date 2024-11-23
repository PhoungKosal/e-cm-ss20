"use client";
import React from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {CartItem} from "@/types";
import {useCartContext} from "@/contexts/cart-context";
import {useQuery} from "@tanstack/react-query";
import {getProductID} from "@/app/server/actions/product";

export const ProductDetail = ({id}: { id: number }) => {
    const {data, isLoading} = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductID(id),
        enabled: !!id,
    });

    const {addItem} = useCartContext();
    const cartItems: CartItem = {
        id: data?.id,
        title: data?.title,
        price: data?.price,
        quantity: 1,
        image: data?.image,
    }
    if (isLoading) {
        return (
            <div
                className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 space-y-6 lg:space-y-0 lg:space-x-8 animate-pulse">
                <div
                    className="relative h-52 w-full lg:w-1/3 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-full lg:w-2/3 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                        </div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                    </div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </div>
            </div>
        )
    }
    return (

        <div
            className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 space-y-6 lg:space-y-0 lg:space-x-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="relative h-52 w-full lg:w-1/3 overflow-hidden rounded-lg">
                <Image
                    src={data?.image}
                    alt={data?.title}
                    layout="fill"
                    className="object-contain"
                />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{data?.title}</h1>
                    {data?.rating && (
                        <div className="text-gray-600 text-sm md:text-base dark:text-gray-300">
                            <span>Rating: {data?.rating} ⭐</span>
                            {/*<span> ({data?.rating?.count} reviews)</span><span> ({data?.rating?.count} reviews)</span>*/}
                        </div>
                    )}
                    <p className="text-gray-700 dark:text-gray-300">{data?.description}</p>
                    <div className="text-orange-500 text-xl md:text-2xl font-bold">
                        ${data?.price.toFixed(2)}
                    </div>
                </div>
                <Button onClick={() => addItem(cartItems)} variant="default">
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default ProductDetail;