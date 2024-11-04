import React from "react";
import {CartItem} from "@/types";
import {useCartContext} from "@/contexts/cart-context";
import Image from "next/image";
import {Button} from "@/components/ui/button";


const ProductCard: React.FC<CartItem> = ({id, name, imageUrl, price, quantity}) => {
    const {incrementQuantity, decrementQuantity, addItem, removeItem} = useCartContext();
    return (
        <div
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 ">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                    <Image src={imageUrl} alt={`${name} image`} width={70}
                           height={150}/>
                </a>

                <label htmlFor={`counter-input-${id}`} className="sr-only">
                    Choose quantity:
                </label>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                        <Button onClick={() => decrementQuantity(id)} variant={'destructive'}
                                className="w-5 h-5">-</Button>
                        <input
                            type="text"
                            id={`counter-input-${id}`}
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            value={quantity}
                            readOnly
                        />
                        <Button onClick={() => incrementQuantity(id)} variant={'default'} className="w-5 h-5">+</Button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">${price}</p>
                    </div>
                </div>

                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#"
                       className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                        {name}
                    </a>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                            onClick={() => addItem({id, name, imageUrl, price, quantity: 1})}
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
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                ></path>
                            </svg>
                            Add to Favorites
                        </button>

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