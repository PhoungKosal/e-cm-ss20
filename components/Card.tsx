import Image from "next/image";
import React from "react";
import Link from "next/link";
import {CardProps} from "@/types";
import {ShoppingBag} from "lucide-react";

const Card: React.FC<CardProps> = ({image, title, rating, price, offer, onAddToCart, link}) => {
    return (
        <div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800
            dark:border-gray-700">
            <div className="relative h-52 w-full overflow-hidden rounded-lg">
                {offer && (
                    <span
                        className="absolute right-2 top-2 z-20 h-[36px] w-[36px] rounded-xl bg-gradient-to-tr from-pink-500 to-yellow-500 p-1 text-center text-[10px] font-medium text-white">
                        {offer}
                    </span>
                )}
                <Link href={link ? `/product/${link}` : "#"}>
                    <Image
                        src={image}
                        alt={title}
                        layout="fill" // Ensures the image fills the container
                        className="object-contain"
                    />
                </Link>
            </div>
            <div className="px-3 pb-3">
                <div>
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>
                <div className="flex items-center mt-1.5 mb-2">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {Array.from({length: 5}, (_, index) => (
                            <svg
                                key={index}
                                className={`w-3 h-3 ${index < rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        ))}
                    </div>
                    <span
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">{rating}.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
                    {/*<Button onClick={onAddToCart}>Add to Card</Button>*/}
                    <ShoppingBag onClick={onAddToCart} size={35} color="orange" className="cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default Card;
