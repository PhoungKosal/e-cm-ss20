"use client";
import {useCartContext} from "@/contexts/cart-context";
import {useQuery} from "@tanstack/react-query";
import {ProductType} from "@/types";

import React from "react";
import Card from "@/components/Card";
import {getAllProducts, getProductsBySearch} from "@/app/server/actions/product";
import {useSearch} from "@/contexts/search-contex";

const ProductPage = () => {
    const {addItem} = useCartContext()
    const {search, searchQuery} = useSearch();
    const {data, error, isLoading} = useQuery<ProductType[]>({
        queryKey: ['products', search, searchQuery], // Query will re-fetch when search or searchQuery change
        queryFn: () => {
            if (search && searchQuery) {
                return getProductsBySearch(searchQuery); // Fetch products based on search query
            }
            return getAllProducts(); // Fetch all products when no search
        },

    });

    if (isLoading) {
        return (
            <>
                {[...Array(3)].map((_, index) => (
                    <div className="flex justify-center items-center" key={index}>
                        <div
                            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse p-4 space-y-4">
                            <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    if (error) return <div>Error: {(error as Error).message}</div>;
    return <>
        {data?.map((item) => (
            <div className="flex justify-center items-center" key={item.id}>
                <Card
                    id={item.id}
                    link={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title.split(" ").slice(0, 4).join(" ")}
                    rating={item.rating.rate}
                    price={item.price}
                    onAddToCart={() => addItem({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        quantity: 1,
                        image: item.image
                    })}
                />
            </div>
        ))}
    </>
}
export default ProductPage;