"use client";
import React from "react";
import {CardProps} from "@/types";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export const ProductDetail: React.FC<CardProps> = ({
                                                       image,
                                                       title,
                                                       rating,
                                                       price,
                                                       offer,
                                                       onAddToCart,
                                                   }) => {
    return (

        <div
            className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/3 flex justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover"
                />
            </div>

            {/* Product Details Section */}
            <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

                    {/* Rating Section */}
                    {rating && (
                        <div className="text-gray-600 mt-2 text-sm md:text-base">
                            <span>Rating: {rating} ⭐</span>
                            <span> ({rating} reviews)</span>
                        </div>
                    )}

                    {/* Price Section */}
                    <div className="flex items-center mt-4">
                        {offer && (
                            <span className="text-gray-500 line-through mr-2 text-lg">
                        ${offer}
                    </span>
                        )}
                        {price && (
                            <span className="text-orange-500 text-xl md:text-2xl font-bold">
                        ${price.toFixed(2)}
                    </span>
                        )}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                    onClick={onAddToCart}
                    variant="default"
                >
                    Add to Cart
                </Button>
            </div>
        </div>

    );
};

export default ProductDetail;