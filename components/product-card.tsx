import React from "react";
import {CartItem} from "@/types";
import {useCartContext} from "@/contexts/cart-context";
import Image from "next/image";
import {SquareMinus, SquarePlus} from "lucide-react";


const ProductCard: React.FC<CartItem> = ({id, title, image, price, quantity}) => {
    const {incrementQuantity, decrementQuantity, removeItem} = useCartContext();
    return (
        <div
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 ">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <div className="relative w-1/3 h-32 overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        className="object-contain"
                    />
                </div>

                <label htmlFor={`counter-input-${id}`} className="sr-only">
                    Choose quantity:
                </label>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                        <SquareMinus onClick={() => decrementQuantity(id)} size={25} color="red"
                                     className="cursor-pointer"/>
                        <input
                            type="text"
                            id={`counter-input-${id}`}
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            value={quantity}
                            readOnly
                        />
                        <SquarePlus onClick={() => incrementQuantity(id)} size={25} color="#0f56e4"
                                    className="cursor-pointer"/>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">${price}</p>
                    </div>
                </div>

                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#"
                       className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                        {title}
                    </a>

                    <div className="items-center gap-4">
                        <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            onClick={() => removeItem(id)}
                        >
                            <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                ></path>
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;