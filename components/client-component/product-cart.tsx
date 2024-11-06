"use client";
import {useCartContext} from "@/contexts/cart-context";
import ProductCard from "@/components/product-card";
import React from "react";

const ProductCart = () => {
    const {products} = useCartContext();
    return (
        <>
            {products && products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        price={product.price}
                        title={product.title}
                        image={product.image}
                        quantity={product.quantity}
                    />
                ))
            ) : (
                <div>Your Cart is Empty</div>
            )}
        </>
    )
}
export default ProductCart;