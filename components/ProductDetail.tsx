"use client";
import React from "react";
import {CardProps} from "@/types";
import {CircleDollarSign, CreditCard} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export const ProductDetail: React.FC<CardProps> = ({
                                                       image,
                                                       title,
                                                       rating,
                                                       price,
                                                       offer,
                                                       onAddToCart
                                                   }) => {
    return (
        <main className="mx-auto h-screen max-w-2xl px-4 py-8 sm:py-16 lg:max-w-7xl lg:px-5 lg:py-16 mt-3">
            <div
                className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md p-6 space-y-6 lg:space-y-0 lg:space-x-8 border-t-2">

                {/* Image Section */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    {/*<img src={image} alt={title} className="w-full max-w-sm h-auto rounded-md"/>*/}
                    <Image src={image} alt={image}/>
                </div>

                {/* Product Details Section */}
                <div className="w-full lg:w-2/3">
                    <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>

                    {/* Rating Section */}
                    <div className="text-gray-600 mt-2 text-sm md:text-base">
                        <span>Rating: {rating} ⭐</span>
                        <span> ({rating} reviews)</span>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center mt-4">
                        {offer && <span className="text-gray-500 line-through mr-2 text-lg">{offer}</span>}
                        <span className="text-orange-500 text-xl md:text-2xl font-bold">${price.toFixed(2)}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <Button onClick={onAddToCart} className="w-full mt-6 py-2 text-sm md:text-base" variant="default">
                        Add to Cart
                    </Button>

                    {/* Payment Icons */}
                    <div className="flex items-center justify-center space-x-2 mt-4">
                        <CreditCard size={30} className="text-gray-700"/>
                        <CircleDollarSign size={30} className="text-gray-700"/>
                        <CircleDollarSign size={30} className="text-gray-700"/>
                        <CircleDollarSign size={30} className="text-gray-700"/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;
